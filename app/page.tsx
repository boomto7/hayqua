/**
 * 메인 페이지
 * 데이터 레이어(hooks)와 UI 레이어(components)를 조합합니다.
 * 이 구조는 디자이너와 개발자가 독립적으로 작업할 수 있게 합니다.
 */

'use client';

import { Container, Heading3, Heading4 } from '@/components/ui';
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
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
    getItemsByCategory,
  } = useMenu();

  const { restaurant } = useRestaurant();

  // 카테고리별로 메뉴 그룹화
  const categoryGroups = categories.map(category => ({
    category,
    items: getItemsByCategory(category.id),
  })).filter(group => group.items.length > 0);

  // UI 레이어: 프레젠테이션
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <Header restaurant={restaurant} />

      <main>
        {/* 검색 및 필터 섹션 */}
        <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
          <Container>
            {/* 검색 바 */}
            <div className="mb-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="메뉴 이름으로 검색..."
              />
            </div>

            {/* 카테고리 필터 */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </Container>
        </section>

        {/* 검색 결과가 있을 때 */}
        {searchQuery && (
          <section className="py-12 bg-white">
            <Container>
              <Heading3 className="mb-6">
                검색 결과 ({filteredItems.length}개)
              </Heading3>
              <MenuGrid 
                items={filteredItems}
                emptyMessage="검색 결과가 없습니다. 다른 검색어를 입력해보세요."
              />
            </Container>
          </section>
        )}

        {/* 검색하지 않았을 때 - 카테고리별 표시 */}
        {!searchQuery && selectedCategory === 'all' && (
          <>
            {/* 인기/추천 메뉴 섹션 */}
            {popularItems.length > 0 && (
              <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
                <Container>
                  <Heading3 className="mb-6 text-[#1a2332]">
                    🔥 추천 메뉴
                  </Heading3>
                  <MenuGrid items={popularItems} />
                </Container>
              </section>
            )}

            {/* 카테고리별 메뉴 섹션 */}
            {categoryGroups.map((group, index) => (
              <section 
                key={group.category.id}
                className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <Container>
                  <div className="mb-6">
                    <Heading3 className="mb-2">
                      {group.category.name}
                    </Heading3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="font-medium">{group.category.nameEn}</span>
                      {group.category.description && (
                        <>
                          <span>•</span>
                          <span>{group.category.description}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <MenuGrid items={group.items} />
                </Container>
              </section>
            ))}
          </>
        )}

        {/* 특정 카테고리 선택했을 때 */}
        {!searchQuery && selectedCategory !== 'all' && (
          <section className="py-12 bg-white">
            <Container>
              {(() => {
                const currentCategory = categories.find(c => c.id === selectedCategory);
                return currentCategory ? (
                  <div className="mb-6">
                    <Heading3 className="mb-2">
                      {currentCategory.name}
                    </Heading3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="font-medium">{currentCategory.nameEn}</span>
                      {currentCategory.description && (
                        <>
                          <span>•</span>
                          <span>{currentCategory.description}</span>
                        </>
                      )}
                    </div>
                  </div>
                ) : null;
              })()}
              <MenuGrid 
                items={filteredItems}
                emptyMessage="해당 카테고리에 메뉴가 없습니다."
              />
            </Container>
          </section>
        )}
      </main>

      {/* 푸터 */}
      <footer className="bg-[#1a2332] text-white py-8">
        <Container>
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">&copy; 2025 {restaurant.name}. All rights reserved.</p>
            <p>베트남 & 퓨전 요리 전문점</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
