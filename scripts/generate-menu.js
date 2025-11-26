/**
 * 메뉴 생성 스크립트
 * category-database.md와 menu-database.md 파일을 읽어서 menu.ts와 types를 생성합니다.
 * 
 * 사용법: npm run generate-menu
 */

const fs = require('fs');
const path = require('path');

/**
 * 카테고리 마크다운을 파싱
 */
function parseCategoriesFromMarkdown(markdown) {
  const categories = [];
  const lines = markdown.split('\n');
  
  let currentCategory = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // ## 카테고리 이름
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      // 이전 카테고리 저장
      if (currentCategory.id) {
        categories.push(currentCategory);
      }
      
      // 새 카테고리 시작
      currentCategory = {
        name: line.replace('## ', '').trim(),
      };
      continue;
    }
    
    // 속성 파싱
    if (line.startsWith('- **ID**:')) {
      currentCategory.id = line.replace('- **ID**:', '').trim();
    } else if (line.startsWith('- **영문명**:')) {
      currentCategory.nameEn = line.replace('- **영문명**:', '').trim();
    } else if (line.startsWith('- **설명**:')) {
      currentCategory.description = line.replace('- **설명**:', '').trim();
    }
  }
  
  // 마지막 카테고리 저장
  if (currentCategory.id) {
    categories.push(currentCategory);
  }
  
  return categories;
}

/**
 * 메뉴 파일에서 카테고리 매핑 파싱
 */
function parseCategoryMapping(markdown) {
  const mapping = {};
  const lines = markdown.split('\n');
  
  let inMappingSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 매핑 섹션 시작
    if (line.includes('## 카테고리 ID 매핑')) {
      inMappingSection = true;
      continue;
    }
    
    // 매핑 섹션 종료
    if (inMappingSection && line === '---') {
      break;
    }
    
    // 매핑 데이터 파싱: "1: pho (칼국수)"
    if (inMappingSection && line.match(/^\d+:/)) {
      const match = line.match(/^(\d+):\s*(\w+)/);
      if (match) {
        const number = match[1];
        const categoryId = match[2];
        mapping[number] = categoryId;
      }
    }
  }
  
  return mapping;
}

/**
 * menu-database.md 파일 업데이트
 */
function updateMenuDatabaseMapping(categories) {
  const menuPath = path.join(process.cwd(), 'data', 'menu-database.md');
  let menuContent = fs.readFileSync(menuPath, 'utf-8');
  
  // 매핑 생성
  const mappingLines = categories.map((cat, index) => 
    `${index + 1}: ${cat.id} (${cat.name})`
  ).join('\n');
  
  // 새로운 매핑 섹션
  const newMappingSection = `## 카테고리 ID 매핑

\`\`\`
${mappingLines}
\`\`\`

> **필드 입력 방법**
> - **카테고리**: 위 숫자를 입력하세요 (1-${categories.length})
> - **가격**: 숫자만 입력하세요 (예: 15000)
> - **추천**, **BEST**: 1을 입력하세요
> - **매운맛**: 0(안매움), 1(매움), 2(더매움), 3(아주매움)

---`;
  
  // 매핑 섹션의 시작과 끝을 찾기
  const lines = menuContent.split('\n');
  let startIndex = -1;
  let endIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '## 카테고리 ID 매핑') {
      startIndex = i;
    }
    if (startIndex !== -1 && lines[i].trim() === '---' && i > startIndex) {
      endIndex = i;
      break;
    }
  }
  
  if (startIndex !== -1 && endIndex !== -1) {
    // 매핑 섹션 교체
    const beforeMapping = lines.slice(0, startIndex).join('\n');
    const afterMapping = lines.slice(endIndex + 1).join('\n');
    menuContent = beforeMapping + '\n' + newMappingSection + '\n' + afterMapping;
    
    // 파일에 쓰기
    fs.writeFileSync(menuPath, menuContent, 'utf-8');
    console.log('✅ menu-database.md의 카테고리 매핑이 업데이트되었습니다.');
    console.log(`   업데이트된 매핑 (${categories.length}개):`);
    categories.forEach((cat, index) => {
      console.log(`     ${index + 1}: ${cat.id} (${cat.name})`);
    });
  } else {
    console.log('⚠️  매핑 섹션을 찾을 수 없어서 업데이트하지 못했습니다.');
    console.log(`   startIndex: ${startIndex}, endIndex: ${endIndex}`);
  }
  
  return menuContent;
}

/**
 * 메뉴 마크다운을 파싱
 */
function parseMenuFromMarkdown(markdown, categoryMapping) {
  const menuItems = [];
  const lines = markdown.split('\n');
  
  let currentItem = {};
  let currentOptions = [];
  let startParsing = false;
  let autoId = 1; // 자동 ID 카운터
  
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i]; // 원본 줄 (들여쓰기 포함)
    const line = rawLine.trim(); // 트림된 줄
    
    // 매핑 섹션 이후부터 파싱 시작
    if (line === '---' && !startParsing) {
      startParsing = true;
      continue;
    }
    
    if (!startParsing) continue;
    
    // ### 메뉴 이름 찾기
    if (line.startsWith('### ')) {
      // 이전 아이템 저장
      if (currentItem.name && currentItem.category) {
        // ID가 없으면 자동 생성
        if (!currentItem.id) {
          currentItem.id = String(autoId++);
        }
        menuItems.push({
          ...currentItem,
          options: currentOptions.length > 0 ? currentOptions : undefined,
        });
      }
      
      // 새 아이템 시작
      currentItem = {
        name: line.replace('### ', '').trim(),
      };
      currentOptions = [];
      continue;
    }
    
    // 속성 파싱
    if (line.startsWith('- **ID**:')) {
      // ID가 명시되어 있으면 사용 (선택적)
      const idValue = line.replace('- **ID**:', '').trim();
      if (idValue) {
        currentItem.id = idValue;
      }
    } else if (line.startsWith('- **카테고리**:')) {
      const categoryValue = line.replace('- **카테고리**:', '').trim();
      // 숫자인 경우 매핑에서 찾기, 아니면 그대로 사용
      currentItem.category = categoryMapping[categoryValue] || categoryValue;
    } else if (line.startsWith('- **영문명**:')) {
      currentItem.nameEn = line.replace('- **영문명**:', '').trim() || undefined;
    } else if (line.startsWith('- **서브타이틀**:')) {
      currentItem.subtitle = line.replace('- **서브타이틀**:', '').trim() || undefined;
    } else if (line.startsWith('- **가격**:')) {
      const priceText = line.replace('- **가격**:', '').trim();
      // 숫자만 파싱 (쉼표와 "원" 제거)
      const priceMatch = priceText.match(/[\d,]+/);
      if (priceMatch) {
        currentItem.price = parseInt(priceMatch[0].replace(/,/g, ''), 10);
      }
    } else if (line.startsWith('- **이미지**:')) {
      const image = line.replace('- **이미지**:', '').trim();
      currentItem.image = image || undefined;
    } else if (line.startsWith('- **매운맛**:')) {
      const spicyText = line.replace('- **매운맛**:', '').trim();
      const spicyLevel = parseInt(spicyText, 10);
      if (!isNaN(spicyLevel) && spicyLevel >= 0 && spicyLevel <= 3) {
        currentItem.spicyLevel = spicyLevel;
      }
    } else if (line.startsWith('- **추천**:')) {
      // 숫자 1 또는 ⭐ 모두 인식
      const value = line.replace('- **추천**:', '').trim();
      currentItem.isPopular = value === '1' || value.includes('⭐');
    } else if (line.startsWith('- **BEST**:')) {
      // 숫자 1 또는 ⭐ 모두 인식
      const value = line.replace('- **BEST**:', '').trim();
      currentItem.isBest = value === '1' || value.includes('⭐');
    } else if (line.startsWith('- **비고**:')) {
      currentItem.note = line.replace('- **비고**:', '').trim() || undefined;
    } else if (rawLine.startsWith('  - ') && !line.startsWith('- **옵션**:')) {
      // 옵션 항목 파싱: "작은 사이즈: 8000" (쉼표와 "원" 제거)
      const optionText = rawLine.replace(/^\s*- /, '').trim();
      const match = optionText.match(/(.+?):\s*([\d,]+)/);
      if (match) {
        currentOptions.push({
          name: match[1].trim(),
          price: parseInt(match[2].replace(/,/g, ''), 10),
        });
      }
    }
  }
  
  // 마지막 아이템 저장
  if (currentItem.name && currentItem.category) {
    // ID가 없으면 자동 생성
    if (!currentItem.id) {
      currentItem.id = String(autoId++);
    }
    menuItems.push({
      ...currentItem,
      options: currentOptions.length > 0 ? currentOptions : undefined,
    });
  }
  
  return menuItems;
}

/**
 * Category 타입 문자열 생성
 */
function generateCategoryType(categories) {
  const categoryLines = categories.map((cat, index) => {
    const isLast = index === categories.length - 1;
    const comment = `// ${cat.name}`;
    const line = `  | '${cat.id}'`;
    return isLast ? `${line};${' '.repeat(15 - cat.id.length)}${comment}` : `${line}${' '.repeat(15 - cat.id.length)}${comment}`;
  });
  
  return `export type Category = \n${categoryLines.join('\n')}`;
}

/**
 * types/menu.ts 파일 업데이트
 */
function updateMenuTypes(categories) {
  const categoryType = generateCategoryType(categories);
  
  const typesContent = `/**
 * 메뉴 관련 타입 정의
 * 데이터 구조를 명확히 정의하여 타입 안정성을 보장합니다.
 * 
 * ⚠️ 이 파일의 Category 타입은 자동 생성됩니다.
 * category-database.md를 수정하고 npm run generate-menu를 실행하세요.
 */

${categoryType}

export interface MenuOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  category: Category;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isBest?: boolean;
  spicyLevel?: number;  // 매운맛 단계: 0(안매움), 1(매움), 2(더매움), 3(아주매움)
  options?: MenuOption[];
  note?: string;
}

export interface MenuCategory {
  id: Category;
  name: string;
  nameEn: string;
  description: string;
  order?: number;  // 카테고리 표시 순서
}

export interface Restaurant {
  name: string;
  description: string;
  logo?: string;
  contact: {
    phone: string;
    address: string;
    hours: string;
  };
}
`;
  
  const typesPath = path.join(process.cwd(), 'types', 'menu.ts');
  fs.writeFileSync(typesPath, typesContent, 'utf-8');
  console.log('✅ types/menu.ts 파일이 업데이트되었습니다.');
}

/**
 * TypeScript 파일 생성
 */
function generateMenuFile() {
  console.log('📖 카테고리 파일을 읽는 중...');
  
  // 카테고리 .md 파일 읽기
  const categoryPath = path.join(process.cwd(), 'data', 'category-database.md');
  const categoryContent = fs.readFileSync(categoryPath, 'utf-8');
  
  console.log('🔄 카테고리 데이터 파싱 중...');
  const categories = parseCategoriesFromMarkdown(categoryContent);
  console.log(`✅ ${categories.length}개의 카테고리를 파싱했습니다.`);
  
  // Category 타입 업데이트
  console.log('🔄 Category 타입 생성 중...');
  updateMenuTypes(categories);
  
  // menu-database.md 매핑 업데이트
  console.log('🔄 menu-database.md 매핑 업데이트 중...');
  const updatedMenuContent = updateMenuDatabaseMapping(categories);
  
  console.log('🔄 카테고리 매핑 파싱 중...');
  const categoryMapping = parseCategoryMapping(updatedMenuContent);
  console.log(`✅ ${Object.keys(categoryMapping).length}개의 매핑을 파싱했습니다.`);
  
  console.log('🔄 메뉴 데이터 파싱 중...');
  const menuItems = parseMenuFromMarkdown(updatedMenuContent, categoryMapping);
  console.log(`✅ ${menuItems.length}개의 메뉴 아이템을 파싱했습니다.`);
  console.log(`   자동 ID 생성: 1 ~ ${menuItems.length}`);
  
  // 카테고리 순서 정보 추가
  const categoriesWithOrder = categories.map((cat, index) => ({
    ...cat,
    order: index + 1,
  }));
  
  // 카테고리별 메뉴 개수 확인
  console.log('\n📊 카테고리별 메뉴 개수:');
  const categoryCount = {};
  menuItems.forEach(item => {
    categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
  });
  categories.forEach(cat => {
    const count = categoryCount[cat.id] || 0;
    console.log(`   ${cat.name} (${cat.id}): ${count}개`);
  });
  
  // 매운맛 통계
  const spicyCount = {0: 0, 1: 0, 2: 0, 3: 0};
  menuItems.forEach(item => {
    if (item.spicyLevel !== undefined) {
      spicyCount[item.spicyLevel]++;
    }
  });
  console.log('\n🌶️ 매운맛 통계:');
  console.log(`   안매움(0): ${spicyCount[0]}개`);
  console.log(`   매움(1): ${spicyCount[1]}개`);
  console.log(`   더매움(2): ${spicyCount[2]}개`);
  console.log(`   아주매움(3): ${spicyCount[3]}개`);
  
  // TypeScript 파일 생성
  const tsContent = `/**
 * 메뉴 데이터
 * 이 파일은 자동 생성됩니다. 직접 수정하지 마세요!
 * 
 * 데이터를 수정하려면:
 * 1. data/category-database.md 파일로 카테고리를 관리하세요
 * 2. data/menu-database.md 파일로 메뉴를 관리하세요
 *    - 각 메뉴에 **카테고리** 필드를 숫자로 입력하세요 (1-${categories.length})
 *    - **가격**은 숫자만 입력하세요 (예: 15000)
 *    - **추천**, **BEST**는 1을 입력하세요
 *    - **매운맛**은 0(안매움), 1(매움), 2(더매움), 3(아주매움)
 *    - ID는 자동으로 순차적으로 생성됩니다 (1부터 시작)
 *    - 카테고리 매핑은 menu-database.md 상단에 자동으로 업데이트됩니다
 * 3. npm run generate-menu 명령을 실행하세요
 * 
 * 마지막 생성: ${new Date().toLocaleString('ko-KR')}
 * 카테고리: ${categories.length}개
 * 메뉴: ${menuItems.length}개
 */

import { MenuItem, MenuCategory } from '@/types';

/**
 * 카테고리 목록
 * category-database.md 파일의 순서대로 정렬됩니다.
 */
export const menuCategories: MenuCategory[] = ${JSON.stringify(categoriesWithOrder, null, 2)};

/**
 * 메뉴 아이템 목록
 * menu-database.md 파일에서 생성됩니다.
 * 각 메뉴는 카테고리 숫자(1-${categories.length})로 참조하며, ID는 자동 생성됩니다.
 */
export const menuItems: MenuItem[] = ${JSON.stringify(menuItems, null, 2)};
`;
  
  // 파일 저장
  const tsPath = path.join(process.cwd(), 'data', 'menu.ts');
  fs.writeFileSync(tsPath, tsContent, 'utf-8');
  
  console.log('\n✨ data/menu.ts 파일이 생성되었습니다!');
  console.log('');
  console.log('📋 카테고리 순서:');
  categories.forEach((cat, index) => {
    console.log(`   ${index + 1}. ${cat.name} (${cat.nameEn})`);
  });
  console.log('');
  console.log('💡 데이터를 수정하려면:');
  console.log('   1. data/category-database.md - 카테고리 및 순서 관리');
  console.log('   2. data/menu-database.md - 메뉴 관리 (매핑은 자동 업데이트!)');
  console.log(`      - 카테고리: 1-${categories.length} 숫자로`);
  console.log('      - 가격: 15000 (숫자만)');
  console.log('      - 추천/BEST: 1');
  console.log('      - 매운맛: 0~3 (0=안매움, 1=매움, 2=더매움, 3=아주매움)');
  console.log('      - ID: 자동 생성');
  console.log('   3. npm run generate-menu - 자동 생성');
}

// 실행
try {
  generateMenuFile();
} catch (error) {
  console.error('❌ 에러 발생:', error.message);
  console.error(error.stack);
  process.exit(1);
}
