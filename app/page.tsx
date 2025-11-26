/**
 * 메인 페이지
 * 데이터 레이어(hooks)와 UI 레이어(components)를 조합합니다.
 * 이 구조는 디자이너와 개발자가 독립적으로 작업할 수 있게 합니다.
 */

'use client';

import { Container, Heading3 } from '@/components/ui';
import { 
  Header, 
  SearchBar, 
  CategoryFilter, 
  MenuGrid 
} from '@/components/features';
import { useMenu, useRestaurant } from '@/hooks';

export default function Home() {
  // 데이터 레이어: 비즈니스 로직과 상태 관리
  const {
    filteredItems,
    popularItems,
    newItems,
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
  } = useMenu();

  const { restaurant } = useRestaurant();

  // UI 레이어: 프레젠테이션
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <Header restaurant={restaurant} />

      <main>
        {/* 인기 메뉴 섹션 */}
        {popularItems.length > 0 && (
          <section className="py-12 bg-white">
            <Container>
              <Heading3 className="mb-6">🔥 인기 메뉴</Heading3>
              <MenuGrid items={popularItems} />
            </Container>
          </section>
        )}

        {/* 신메뉴 섹션 */}
        {newItems.length > 0 && (
          <section className="py-12">
            <Container>
              <Heading3 className="mb-6">✨ 신메뉴</Heading3>
              <MenuGrid items={newItems} />
            </Container>
          </section>
        )}

        {/* 전체 메뉴 섹션 */}
        <section className="py-12 bg-white">
          <Container>
            <Heading3 className="mb-6">전체 메뉴</Heading3>
            
            {/* 검색 바 */}
            <div className="mb-6">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="메뉴 이름이나 설명으로 검색..."
              />
            </div>

            {/* 카테고리 필터 */}
            <div className="mb-8">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* 메뉴 그리드 */}
            <MenuGrid 
              items={filteredItems}
              emptyMessage="검색 결과가 없습니다. 다른 검색어를 입력해보세요."
            />
          </Container>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <Container>
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">&copy; 2025 {restaurant.name}. All rights reserved.</p>
            <p>이 웹사이트는 Next.js로 제작되었습니다.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
