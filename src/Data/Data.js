// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilSetting,
  
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "My Apps",
  },
  {
    icon: UilClipboardAlt,
    heading: "Resource",
  },
  {
    icon: UilUsersAlt,
    heading: "My Organization",
  },
  {
    icon: UilSetting,
    heading: 'Setting'
  },
  {
    icon: UilChart,
    heading: 'Logout'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ongoing",
    color: {
      backGround: "linear-gradient(180deg, yellow 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 66,
    value: "66",
    png: UilUsdSquare,
    series: [
      {
        name: "Ongoing",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Deyled",
    color: {
      backGround: "linear-gradient(180deg, Red 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "24",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Deyled",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Assignment",
    color: {
      backGround: "linear-gradient(180deg, skyblue 0%, skyblue 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue:100,
    value: "100",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Assignment",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },

  {
    title: "Completed",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, green -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "10",
    png: UilClipboardAlt,
    series: [
      {
        name: "Completed",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];



// Recent Update Card Data
export const UpdatesData = [
  {
  //   img: img1,
    name: "Add Task",
  //   noti: "has ordered Apple smart watch 2500mh battery.",
  //   time: "25 seconds ago",
  },

];
