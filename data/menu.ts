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
 *    - 카테고리 매핑은 menu-database.md 상단에 자동으로 업데이트됩니다
 * 3. npm run generate-menu 명령을 실행하세요
 * 
 * 마지막 생성: 2025. 11. 27. 오후 6:22:14
 * 카테고리: 8개
 * 메뉴: 35개
 */

import { MenuItem, MenuCategory } from '@/types';

/**
 * 카테고리 목록
 * category-database.md 파일의 순서대로 정렬됩니다.
 */
export const menuCategories: MenuCategory[] = [
  {
    "name": "쌀국수",
    "id": "pho",
    "nameEn": "PHO NOODLE SOUP",
    "description": "쌀국수 메뉴",
    "order": 1
  },
  {
    "name": "볶음면",
    "id": "friedNoodles",
    "nameEn": "FRIED NOODLES",
    "description": "각종 볶음면",
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
    "name": "음료",
    "id": "drink",
    "nameEn": "Drink",
    "description": "",
    "order": 6
  },
  {
    "name": "주류",
    "id": "alcohol",
    "nameEn": "Alcoholic Beverages",
    "description": "",
    "order": 7
  },
  {
    "name": "안주류",
    "id": "hotfood",
    "nameEn": "Hot Food",
    "isNight": 1,
    "description": "",
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
    "name": "차돌양지 쌀국수",
    "category": "pho",
    "nameEn": "Brisket Pho",
    "price": 11500,
    "spicyLevel": 0,
    "image": "/images/차돌양지쌀국수.png",
    "note": "매운맛 변경 시 +1,000원",
    "id": "1"
  },
  {
    "name": "차돌박이 쌀국수",
    "category": "pho",
    "nameEn": "Flank Pho",
    "price": 13000,
    "spicyLevel": 0,
    "image": "/images/차돌박이쌀국수.jpeg",
    "note": "매운맛 변경 시 +1,000원",
    "id": "2"
  },
  {
    "name": "닭고기 버섯 쌀국수",
    "category": "pho",
    "nameEn": "Chicken Mushroom Pho",
    "price": 12500,
    "spicyLevel": 1,
    "image": "/images/닭고기버섯쌀국수.jpeg",
    "isBest": true,
    "note": "매운맛 변경 시 +1,000원",
    "id": "3"
  },
  {
    "name": "새우완탕 버섯 쌀국수",
    "category": "pho",
    "nameEn": "Shrimp Wantang Mushroom Pho",
    "price": 14000,
    "spicyLevel": 1,
    "image": "/images/새우완탕쌀국수.jpeg",
    "isPopular": true,
    "note": "매운맛 변경 시 +1,000원",
    "id": "4"
  },
  {
    "name": "통오징어 해산물 쌀국수",
    "category": "pho",
    "nameEn": "Whole Squid Seafood Pho",
    "price": 16000,
    "spicyLevel": 1,
    "image": "/images/통오징어_해산물_쌀국수.png",
    "isBest": true,
    "id": "5"
  },
  {
    "name": "팟타이",
    "category": "friedNoodles",
    "nameEn": "Phat Thai",
    "price": 13500,
    "spicyLevel": 0,
    "image": "/images/팟타이.jpeg",
    "isPopular": true,
    "id": "6"
  },
  {
    "name": "치킨 팟타이",
    "category": "friedNoodles",
    "nameEn": "Chicken Phat Thai",
    "price": 14500,
    "spicyLevel": 0,
    "id": "7"
  },
  {
    "name": "파인애플 볶음밥",
    "category": "friedRice",
    "nameEn": "Pineapple Fried Rice",
    "price": 13000,
    "spicyLevel": 0,
    "image": "/images/파인애플볶음밥.jpeg",
    "id": "8"
  },
  {
    "name": "소불고기 볶음밥",
    "category": "friedRice",
    "nameEn": "Beef Bulgogi Rice",
    "price": 14000,
    "spicyLevel": 0,
    "image": "/images/소불고기볶음밥.jpeg",
    "id": "9"
  },
  {
    "name": "통오징어 해산물 볶음밥",
    "category": "friedRice",
    "nameEn": "Whole Squid Seafood Rice",
    "price": 16000,
    "spicyLevel": 0,
    "image": "/images/통오징어해산물볶음밥.jpeg",
    "isPopular": true,
    "id": "10"
  },
  {
    "name": "분짜",
    "category": "special",
    "nameEn": "Bun Cha",
    "price": 15500,
    "spicyLevel": 0,
    "image": "/images/분짜.jpeg",
    "id": "11"
  },
  {
    "name": "에그롤",
    "category": "side",
    "nameEn": "Egg Rolls (sweet potato, Shrimp)",
    "spicyLevel": 0,
    "id": "12",
    "options": [
      {
        "name": "(고구마 2 / 새우 2) 4 PCS",
        "price": 4900
      },
      {
        "name": "(고구마 3 / 새우 3) 6 PCS",
        "price": 6900
      }
    ]
  },
  {
    "name": "새우고로케",
    "category": "side",
    "nameEn": "Shrimp Croquette",
    "spicyLevel": 0,
    "id": "13",
    "options": [
      {
        "name": "4 CUT",
        "price": 4900
      },
      {
        "name": "6 CUT",
        "price": 6900
      }
    ]
  },
  {
    "name": "해물짜조",
    "category": "side",
    "nameEn": "Sea food Cha Gio",
    "spicyLevel": 0,
    "id": "14",
    "options": [
      {
        "name": "4 CUT",
        "price": 4900
      },
      {
        "name": "6 CUT",
        "price": 6900
      }
    ]
  },
  {
    "name": "새우튀김",
    "category": "side",
    "nameEn": "Fried Shrimp",
    "spicyLevel": 0,
    "id": "15",
    "options": [
      {
        "name": "4 PCS",
        "price": 4900
      },
      {
        "name": "6 PCS",
        "price": 6900
      }
    ]
  },
  {
    "name": "버팔로윙, 붕",
    "category": "side",
    "nameEn": "Buffalo Wing, Bong",
    "subtitle": "윙 Wing or 봉 Bong",
    "spicyLevel": 0,
    "id": "16",
    "options": [
      {
        "name": "4 PCS",
        "price": 5900
      },
      {
        "name": "6 PCS",
        "price": 7900
      }
    ]
  },
  {
    "name": "탄산음료",
    "category": "drink",
    "nameEn": "Soft Drink",
    "spicyLevel": 0,
    "id": "17",
    "options": [
      {
        "name": "콜라 / 사이다 Coke / Sider",
        "price": 2500
      },
      {
        "name": "웰치스 포토 Welchs Grape",
        "price": 3000
      }
    ]
  },
  {
    "name": "주스",
    "category": "drink",
    "nameEn": "Juice",
    "spicyLevel": 0,
    "id": "18",
    "options": [
      {
        "name": "망고 / 오렌지 Mango / Orange",
        "price": 4000
      }
    ]
  },
  {
    "name": "아이스티",
    "category": "drink",
    "nameEn": "Ice Tea",
    "spicyLevel": 0,
    "id": "19",
    "options": [
      {
        "name": "복숭아 Peach",
        "price": 4000
      }
    ]
  },
  {
    "name": "에이드",
    "category": "drink",
    "nameEn": "Ade",
    "spicyLevel": 0,
    "id": "20",
    "options": [
      {
        "name": "자몽 / 레몬 / 청포도 / 모히또 / 라즈베리 Grapefruit / Lemon / Green Grape / Mojito / Raspberry",
        "price": 5000
      }
    ]
  },
  {
    "name": "소주",
    "category": "alcohol",
    "nameEn": "Soju",
    "spicyLevel": 0,
    "id": "21",
    "options": [
      {
        "name": "참이슬 / 처음처럼 / 진로 / 새로",
        "price": 5000
      },
      {
        "name": "청하",
        "price": 5500
      }
    ]
  },
  {
    "name": "생맥주",
    "category": "alcohol",
    "nameEn": "Draft Beer",
    "spicyLevel": 0,
    "id": "22",
    "options": [
      {
        "name": "테라 생맥주 Terra Draft Beer 180ml",
        "price": 2000
      },
      {
        "name": "테라 생맥주 Terra Draft Beer 450ml",
        "price": 5000
      },
      {
        "name": "자몽 / 레몬 / 청포도 생맥주 400ml",
        "price": 7000
      }
    ]
  },
  {
    "name": "병맥주",
    "category": "alcohol",
    "nameEn": "Bottled beer",
    "spicyLevel": 0,
    "id": "23",
    "options": [
      {
        "name": "카스 / 테라 Cass / Terra 500ml",
        "price": 5500
      }
    ]
  },
  {
    "name": "하이볼",
    "category": "alcohol",
    "nameEn": "High Ball 380ml",
    "spicyLevel": 0,
    "isNight": 1,
    "note": "샷추가 +2,000원",
    "id": "24",
    "options": [
      {
        "name": "산토리하이볼 Suntory High Ball",
        "price": 7000
      },
      {
        "name": "진빔하이볼 Jinbeam High Ball",
        "price": 7000
      },
      {
        "name": "모히또하이볼 Mojito High Ball",
        "price": 8000
      },
      {
        "name": "자몽하이볼 Grapefruit High Ball",
        "price": 8000
      },
      {
        "name": "얼그레이하이볼 Earl Gray High Ball",
        "price": 8000
      },
      {
        "name": "라지베리하이볼 Raspberry High Ball",
        "price": 8000
      }
    ]
  },
  {
    "name": "점보계란말이",
    "category": "hotfood",
    "nameEn": "Jumbo Egg",
    "price": 15000,
    "spicyLevel": 0,
    "id": "25"
  },
  {
    "name": "새우완자계란탕",
    "category": "hotfood",
    "nameEn": "Shrimp Wantang Eggsoup",
    "price": 17000,
    "spicyLevel": 0,
    "isNight": 1,
    "image": "/images/새우완자계란탕.jpeg",
    "id": "26"
  },
  {
    "name": "통오징어 치킨 야끼우동",
    "category": "hotfood",
    "nameEn": "Whole Squid Chicken Yaki Udon",
    "price": 25000,
    "spicyLevel": 0,
    "image": "/images/돌판통오징어치킨야끼우동.jpeg",
    "isPopular": true,
    "isNight": 1,
    "id": "27",
    "options": [
      {
        "name": "우동사리 추가",
        "price": 2000
      },
      {
        "name": "밥볶음사리",
        "price": 4000
      }
    ]
  },
  {
    "name": "통오징어 해물짬뽕",
    "category": "hotfood",
    "nameEn": "Whole Squid SeaFood Jjamppong",
    "price": 24000,
    "spicyLevel": 0,
    "isNight": 1,
    "image": "/images/통오징어해물짬뽕.jpeg",
    "id": "28"
  },
  {
    "name": "통오징어 나가사끼짬뽕",
    "category": "hotfood",
    "nameEn": "Whole Squid Nagasaki Jjamppong",
    "price": 24000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "29"
  },
  {
    "name": "허니오리훈제 야채볶음",
    "category": "hotfood",
    "nameEn": "Stir-Gried Honey Duck Smokes Vegetables",
    "price": 18000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "30"
  },
  {
    "name": "케이준 감자튀김",
    "category": "hotfood",
    "nameEn": "Fried Kayju Potato",
    "price": 12000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "31"
  },
  {
    "name": "수제치킨 가라아게",
    "category": "hotfood",
    "nameEn": "Chicken Karaage",
    "price": 15000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "32"
  },
  {
    "name": "불닭데리 숯불 닭꼬치",
    "category": "hotfood",
    "nameEn": "Roast chicken Deri Charcoal FireChicken Skewer",
    "price": 14000,
    "spicyLevel": 0,
    "isNight": 1,
    "image": "/images/불닭데리숯불닭꼬치.jpeg",
    "id": "33"
  },
  {
    "name": "투뿔 바삭 먹태",
    "category": "hotfood",
    "nameEn": "Two++ Crunchy Dried Pollack",
    "price": 16000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "34"
  },
  {
    "name": "가문어",
    "category": "hotfood",
    "nameEn": "A Fake Octopus",
    "price": 12000,
    "spicyLevel": 0,
    "isNight": 1,
    "id": "35"
  }
];
