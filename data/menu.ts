/**
 * 메뉴 데이터
 * 이 파일은 자동 생성됩니다. 직접 수정하지 마세요!
 * 
 * 데이터를 수정하려면:
 * 1. data/category-database.md 파일로 카테고리를 관리하세요
 * 2. data/menu-database.md 파일로 메뉴를 관리하세요
 *    - 각 메뉴에 **카테고리** 필드를 숫자로 입력하세요 (1-8)
 *    - **가격**은 숫자만 입력하세요 (예: 15000)
 *    - **추천**, **BEST**는 1을 입력하세요
 *    - **매운맛**은 0(안매움), 1(매움), 2(더매움), 3(아주매움)
 *    - ID는 자동으로 순차적으로 생성됩니다 (1부터 시작)
 *    - 카테고리 매핑은 menu-database.md 상단에 있습니다
 * 3. npm run generate-menu 명령을 실행하세요
 * 
 * 마지막 생성: 2025. 11. 26. 오후 2:45:00
 * 카테고리: 8개
 * 메뉴: 57개
 */

import { MenuItem, MenuCategory } from '@/types';

/**
 * 카테고리 목록
 * category-database.md 파일의 순서대로 정렬됩니다.
 */
export const menuCategories: MenuCategory[] = [
  {
    "name": "칼국수",
    "id": "pho",
    "nameEn": "PHO NOODLE SOUP",
    "description": "쌀국수 메뉴",
    "order": 1
  },
  {
    "name": "볶음면",
    "id": "friedNoodles",
    "nameEn": "FRIED NOODLES",
    "description": "팟타이",
    "order": 2
  },
  {
    "name": "볶음밥",
    "id": "friedRice",
    "nameEn": "FRIED RICE",
    "description": "각종 볶음밥",
    "order": 3
  },
  {
    "name": "스페셜메뉴",
    "id": "special",
    "nameEn": "SPECIAL MENU",
    "description": "특별 메뉴",
    "order": 4
  },
  {
    "name": "애피타이져",
    "id": "side",
    "nameEn": "SIDE MENU",
    "description": "사이드 메뉴",
    "order": 5
  },
  {
    "name": "안주류",
    "id": "hotfood",
    "nameEn": "Hot Food",
    "description": "14:00 ~ 영업시간까지",
    "order": 6
  },
  {
    "name": "음료",
    "id": "drink",
    "nameEn": "Drink",
    "description": "탄산음료, 주스, 에이드",
    "order": 7
  },
  {
    "name": "주류",
    "id": "alcohol",
    "nameEn": "Alcoholic Beverages",
    "description": "소주, 맥주, 하이볼",
    "order": 8
  }
];

/**
 * 메뉴 아이템 목록
 * menu-database.md 파일에서 생성됩니다.
 * 각 메뉴는 카테고리 숫자(1-8)로 참조하며, ID는 자동 생성됩니다.
 */
export const menuItems: MenuItem[] = [
  {
    "name": "점보계란말이",
    "category": "hotfood",
    "nameEn": "Jumbo Egg",
    "price": 15000,
    "spicyLevel": 0,
    "id": "1"
  },
  {
    "name": "새우완자계란탕",
    "category": "hotfood",
    "nameEn": "Shrimp Wantang Eggsoup",
    "price": 17000,
    "spicyLevel": 0,
    "image": "/images/새우완자계란탕.jpeg",
    "id": "2"
  },
  {
    "name": "통오징어 치킨 야끼우동",
    "category": "hotfood",
    "nameEn": "Whole Squid Chicken Yaki Udon",
    "price": 25000,
    "spicyLevel": 1,
    "image": "/images/돌판통오징어치킨야끼우동.jpeg",
    "isPopular": true,
    "id": "3"
  },
  {
    "name": "통오징어 해물짬뽕",
    "category": "hotfood",
    "nameEn": "Whole Squid SeaFood Jjamppong",
    "price": 24000,
    "spicyLevel": 2,
    "image": "/images/통오징어해물짬뽕.jpeg",
    "id": "4"
  },
  {
    "name": "통오징어 나가사끼짬뽕",
    "category": "hotfood",
    "nameEn": "Whole Squid Nagasaki Jjamppong",
    "price": 24000,
    "spicyLevel": 2,
    "id": "5"
  },
  {
    "name": "허니오리훈제 야채볶음",
    "category": "hotfood",
    "nameEn": "Stir-Gried Honey Duck Smokes Vegetables",
    "price": 18000,
    "spicyLevel": 0,
    "id": "6"
  },
  {
    "name": "케이준 감자튀김",
    "category": "hotfood",
    "nameEn": "Fried Kayju Potato",
    "price": 12000,
    "spicyLevel": 1,
    "id": "7"
  },
  {
    "name": "수제치킨 가라아게",
    "category": "hotfood",
    "nameEn": "Chicken Karaage",
    "price": 15000,
    "spicyLevel": 0,
    "id": "8"
  },
  {
    "name": "불닭데리 숯불 닭꼬치",
    "category": "hotfood",
    "nameEn": "Roast chicken Deri Charcoal FireChicken Skewer",
    "price": 14000,
    "spicyLevel": 2,
    "image": "/images/불닭데리숯불닭꼬치.jpeg",
    "id": "9"
  },
  {
    "name": "투뿔 바삭 먹태",
    "category": "hotfood",
    "nameEn": "Two++ Crunchy Dried Pollack",
    "price": 16000,
    "spicyLevel": 0,
    "id": "10"
  },
  {
    "name": "가돈어",
    "category": "hotfood",
    "nameEn": "A Fake Octopus",
    "price": 12000,
    "spicyLevel": 0,
    "id": "11"
  },
  {
    "name": "자들양지 쌀국수",
    "category": "pho",
    "nameEn": "Brisket Pho",
    "price": 11500,
    "spicyLevel": 0,
    "image": "/images/차돌양지쌀국수.png",
    "id": "12"
  },
  {
    "name": "자들박이쌀국수",
    "category": "pho",
    "nameEn": "Flank Pho",
    "price": 13000,
    "spicyLevel": 1,
    "image": "/images/매운양지쌀국수.jpeg",
    "id": "13"
  },
  {
    "name": "닭고기 버섯 쌀국수",
    "category": "pho",
    "nameEn": "Chicken Mushroom Pho",
    "price": 12500,
    "spicyLevel": 0,
    "image": "/images/닭고기버섯쌀국수.jpeg",
    "isBest": true,
    "id": "14"
  },
  {
    "name": "새우완탕 버섯 쌀국수",
    "category": "pho",
    "nameEn": "Shrimp Wantang Mushroom Pho",
    "price": 14000,
    "spicyLevel": 0,
    "image": "/images/새우완탕쌀국수.jpeg",
    "isPopular": true,
    "note": "매운맛 변경 시 +1,000원",
    "id": "15"
  },
  {
    "name": "통오징어 해산물 쌀국수",
    "category": "pho",
    "nameEn": "Whole Squid Seafood Pho",
    "price": 16000,
    "spicyLevel": 0,
    "image": "/images/통오징어_해산물_쌀국수.png",
    "isBest": true,
    "note": "매운맛 변경 시 +1,000원",
    "id": "16"
  },
  {
    "name": "팟타이",
    "category": "friedNoodles",
    "nameEn": "Phat Thai",
    "price": 13500,
    "spicyLevel": 0,
    "image": "/images/팟타이.jpeg",
    "isPopular": true,
    "id": "17"
  },
  {
    "name": "치킨 팟타이",
    "category": "friedNoodles",
    "nameEn": "Chicken Phat Thai",
    "price": 14500,
    "spicyLevel": 0,
    "id": "18"
  },
  {
    "name": "파인애플 볶음밥",
    "category": "friedRice",
    "nameEn": "Pineapple Fried Rice",
    "price": 13000,
    "spicyLevel": 0,
    "image": "/images/파인애플볶음밥.jpeg",
    "id": "19"
  },
  {
    "name": "소불고기 볶음밥",
    "category": "friedRice",
    "nameEn": "Beef Bulgogi Rice",
    "price": 14000,
    "spicyLevel": 0,
    "image": "/images/소불고기볶음밥.jpeg",
    "id": "20"
  },
  {
    "name": "통오징어 해산물 볶음밥",
    "category": "friedRice",
    "nameEn": "Whole Squid Seafood Rice",
    "price": 16000,
    "spicyLevel": 1,
    "image": "/images/통오징어해산물볶음밥.jpeg",
    "isPopular": true,
    "id": "21"
  },
  {
    "name": "분짜",
    "category": "special",
    "nameEn": "Bun Cha",
    "price": 15500,
    "spicyLevel": 0,
    "image": "/images/분짜.jpeg",
    "id": "22"
  },
  {
    "name": "에그롤",
    "category": "side",
    "nameEn": "Egg Rolls (sweet potato, Shrimp)",
    "spicyLevel": 0,
    "id": "23"
  },
  {
    "name": "새우고로케",
    "category": "side",
    "nameEn": "Shrimp Croquette",
    "spicyLevel": 0,
    "id": "24"
  },
  {
    "name": "해물쪄조",
    "category": "side",
    "nameEn": "Sea food Cha Gio",
    "spicyLevel": 0,
    "id": "25"
  },
  {
    "name": "새우튀김",
    "category": "side",
    "nameEn": "Fried Shrimp",
    "spicyLevel": 0,
    "id": "26"
  },
  {
    "name": "버팔로윙",
    "category": "side",
    "nameEn": "Buffalo Wing",
    "spicyLevel": 1,
    "id": "27"
  },
  {
    "name": "버팔로봉",
    "category": "side",
    "nameEn": "Buffalo Bong",
    "spicyLevel": 1,
    "id": "28"
  },
  {
    "name": "콜라",
    "category": "drink",
    "nameEn": "Coke",
    "price": 2500,
    "spicyLevel": 0,
    "id": "29"
  },
  {
    "name": "사이다",
    "category": "drink",
    "nameEn": "Sider",
    "price": 2500,
    "spicyLevel": 0,
    "id": "30"
  },
  {
    "name": "웰치스 포도",
    "category": "drink",
    "nameEn": "Welchs Grape",
    "price": 3000,
    "spicyLevel": 0,
    "id": "31"
  },
  {
    "name": "망고 주스",
    "category": "drink",
    "nameEn": "Mango Juice",
    "price": 4000,
    "spicyLevel": 0,
    "id": "32"
  },
  {
    "name": "오렌지 주스",
    "category": "drink",
    "nameEn": "Orange Juice",
    "price": 4000,
    "spicyLevel": 0,
    "id": "33"
  },
  {
    "name": "복숭아 아이스티",
    "category": "drink",
    "nameEn": "Peach Ice Tea",
    "price": 4000,
    "spicyLevel": 0,
    "id": "34"
  },
  {
    "name": "자몽 에이드",
    "category": "drink",
    "nameEn": "Grapefruit Ade",
    "price": 5000,
    "spicyLevel": 0,
    "id": "35"
  },
  {
    "name": "레몬 에이드",
    "category": "drink",
    "nameEn": "Lemon Ade",
    "price": 5000,
    "spicyLevel": 0,
    "id": "36"
  },
  {
    "name": "청포도 에이드",
    "category": "drink",
    "nameEn": "Green Grape Ade",
    "price": 5000,
    "spicyLevel": 0,
    "id": "37"
  },
  {
    "name": "모히토 에이드",
    "category": "drink",
    "nameEn": "Mojito Ade",
    "price": 5000,
    "spicyLevel": 0,
    "id": "38"
  },
  {
    "name": "라즈베리 에이드",
    "category": "drink",
    "nameEn": "Raspberry Ade",
    "price": 5000,
    "spicyLevel": 0,
    "id": "39"
  },
  {
    "name": "산토리 하이볼",
    "category": "alcohol",
    "nameEn": "Suntory High Ball 380ml",
    "price": 7000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "40"
  },
  {
    "name": "진빔 하이볼",
    "category": "alcohol",
    "nameEn": "Jinbeam High Ball 380ml",
    "price": 7000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "41"
  },
  {
    "name": "모히토 하이볼",
    "category": "alcohol",
    "nameEn": "Mojito High Ball 380ml",
    "price": 8000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "42"
  },
  {
    "name": "자몽 하이볼",
    "category": "alcohol",
    "nameEn": "Grapefruit High Ball 380ml",
    "price": 8000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "43"
  },
  {
    "name": "얼그레이 하이볼",
    "category": "alcohol",
    "nameEn": "Earl Grey High Ball 380ml",
    "price": 8000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "44"
  },
  {
    "name": "라즈베리 하이볼",
    "category": "alcohol",
    "nameEn": "Raspberry High Ball 380ml",
    "price": 8000,
    "spicyLevel": 0,
    "note": "샷추가 +2,000원",
    "id": "45"
  },
  {
    "name": "참이슬",
    "category": "alcohol",
    "nameEn": "Soju",
    "price": 5000,
    "spicyLevel": 0,
    "id": "46"
  },
  {
    "name": "자몽처럼",
    "category": "alcohol",
    "nameEn": "Soju",
    "price": 5000,
    "spicyLevel": 0,
    "id": "47"
  },
  {
    "name": "진로",
    "category": "alcohol",
    "nameEn": "Soju",
    "price": 5000,
    "spicyLevel": 0,
    "id": "48"
  },
  {
    "name": "새로",
    "category": "alcohol",
    "nameEn": "Soju",
    "price": 5000,
    "spicyLevel": 0,
    "id": "49"
  },
  {
    "name": "청하",
    "category": "alcohol",
    "nameEn": "Chungha",
    "price": 5500,
    "spicyLevel": 0,
    "id": "50"
  },
  {
    "name": "테라 생맥주 (180ml)",
    "category": "alcohol",
    "nameEn": "Terra Draft Beer 180ml",
    "price": 2000,
    "spicyLevel": 0,
    "id": "51"
  },
  {
    "name": "테라 생맥주 (450ml)",
    "category": "alcohol",
    "nameEn": "Terra Draft Beer 450ml",
    "price": 5000,
    "spicyLevel": 0,
    "id": "52"
  },
  {
    "name": "자몽 생맥주",
    "category": "alcohol",
    "nameEn": "Grapefruit Draft Beer 400ml",
    "price": 7000,
    "spicyLevel": 0,
    "id": "53"
  },
  {
    "name": "레몬 생맥주",
    "category": "alcohol",
    "nameEn": "Lemon Draft Beer 400ml",
    "price": 7000,
    "spicyLevel": 0,
    "id": "54"
  },
  {
    "name": "청포도 생맥주",
    "category": "alcohol",
    "nameEn": "Green Grape Draft Beer 400ml",
    "price": 7000,
    "spicyLevel": 0,
    "id": "55"
  },
  {
    "name": "카스",
    "category": "alcohol",
    "nameEn": "Cass 500ml",
    "price": 5500,
    "spicyLevel": 0,
    "id": "56"
  },
  {
    "name": "테라",
    "category": "alcohol",
    "nameEn": "Terra 500ml",
    "price": 5500,
    "spicyLevel": 0,
    "id": "57"
  }
];
