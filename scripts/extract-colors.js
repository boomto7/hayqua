const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function extractColors() {
  const imagePath = path.join(process.cwd(), 'public', 'concept', 'bi.png');
  
  if (!fs.existsSync(imagePath)) {
    console.error('❌ 이미지 파일을 찾을 수 없습니다:', imagePath);
    process.exit(1);
  }

  try {
    // 이미지 로드
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    console.log('📷 이미지 정보:');
    console.log(`   크기: ${metadata.width}x${metadata.height}`);
    console.log(`   포맷: ${metadata.format}`);
    
    // 이미지를 리사이즈하여 색상 분석 속도 향상
    const resized = await image
      .resize(200, 200, { fit: 'inside' })
      .raw()
      .toBuffer();
    
    // 픽셀 데이터에서 색상 추출
    const colors = new Map();
    const pixelCount = resized.length / (metadata.channels || 4);
    
    for (let i = 0; i < resized.length; i += (metadata.channels || 4)) {
      const r = resized[i];
      const g = resized[i + 1];
      const b = resized[i + 2];
      
      // 투명도가 낮은 픽셀은 제외
      if (metadata.channels === 4 && resized[i + 3] < 128) {
        continue;
      }
      
      // 색상을 16단계로 양자화하여 유사한 색상들을 그룹화
      const quantizedR = Math.floor(r / 16) * 16;
      const quantizedG = Math.floor(g / 16) * 16;
      const quantizedB = Math.floor(b / 16) * 16;
      
      const colorKey = `${quantizedR},${quantizedG},${quantizedB}`;
      colors.set(colorKey, (colors.get(colorKey) || 0) + 1);
    }
    
    // 색상을 사용 빈도순으로 정렬
    const sortedColors = Array.from(colors.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10); // 상위 10개 색상
    
    console.log('\n🎨 주요 색상 (사용 빈도순):');
    sortedColors.forEach(([color, count], index) => {
      const [r, g, b] = color.split(',').map(Number);
      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
      const percentage = ((count / pixelCount) * 100).toFixed(2);
      
      console.log(`   ${index + 1}. RGB(${r}, ${g}, ${b}) = ${hex} (${percentage}%)`);
    });
    
    // 메인 색상 추천
    const mainColor = sortedColors[0];
    const [mainR, mainG, mainB] = mainColor[0].split(',').map(Number);
    const mainHex = `#${mainR.toString(16).padStart(2, '0')}${mainG.toString(16).padStart(2, '0')}${mainB.toString(16).padStart(2, '0')}`.toUpperCase();
    
    console.log('\n✨ 추천 메인 색상:');
    console.log(`   ${mainHex}`);
    console.log(`   RGB(${mainR}, ${mainG}, ${mainB})`);
    
    // 서브 색상 추천 (2-4번째 색상)
    console.log('\n🎨 추천 서브 색상:');
    sortedColors.slice(1, 4).forEach(([color, count], index) => {
      const [r, g, b] = color.split(',').map(Number);
      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
      console.log(`   ${index + 1}. ${hex} (RGB(${r}, ${g}, ${b}))`);
    });
    
  } catch (error) {
    console.error('❌ 색상 추출 중 오류:', error.message);
    process.exit(1);
  }
}

extractColors();

