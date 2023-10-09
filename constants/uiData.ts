import {
  bookingIcon,
  cashierIcon,
  chatIcon,
  companyIcon,
  constructionIcon,
  eCommerceIcon,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  onlineAttendanceIcon,
  sportCenterIcon,
  twitterIcon,
  user1,
  userNodewave,
  workshopIcon,
  youtubeIcon,
  workBg1,
  workThumbnail1,
  workBg2,
  workThumbnail2,
} from "@/assets";

export const testimonies = [
  {
    text: "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave",
    author: "Ahmad Prasetyo",
  },
  {
    text: "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.",
    author: "Laras Ratnadewi",
  },
  {
    text: "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
    author: "Yusuf Uwais",
  },
];

export const works = [
  {
    title: "Rayu Motor",
    description:
      "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
    bg: workBg1,
    image: workThumbnail1,
  },
  {
    title: "Jasabung",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ea ad corrupti natus error laborum.",
    bg: workBg2,
    image: workThumbnail2,
  },
];

export const chats: {
  user: string;
  altUser: string;
  text: string;
  align: "left" | "right";
}[] = [
  {
    user: user1,
    altUser: "user 1",
    align: "left",
    text: "My name is Danny, I’m looking for profile website company",
  },
  {
    user: userNodewave,
    altUser: "user nodewave",
    align: "right",
    text: "Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting",
  },
  {
    user: user1,
    altUser: "user 1",
    align: "left",
    text: "Sounds good, I have many desires to explain",
  },
  {
    user: userNodewave,
    altUser: "user nodewave",
    align: "right",
    text: "How do I arrange our meeting on Monday at 10 WIB and my team will contact you again",
  },
];

export const ApplicationThatCanBeMade = [
  {
    icon: onlineAttendanceIcon,
    title: "Online Attendance",
    description:
      "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:",
    list: [
      "Clock in and Clock Out attendance",
      "Face Photo",
      "Face Recognition",
      "Accurate time stamp down to seconds",
      "GPS location of employees",
    ],
  },
  {
    icon: sportCenterIcon,
    title: "Sport Center",
    description:
      "Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
    list: [
      "Choose a booking schedule",
      "Online payments",
      "Automatic scheduling system",
      "Search for Friends feature",
      "Split Payment with team members",
      "Information and announcements from you",
    ],
  },
  {
    icon: bookingIcon,
    title: "Booking",
    description:
      "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
    list: [
      "Memilih jenis dan kategori jasa yang dikehendaki",
      "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital",
      "Penjadwalan dengan tim lapangan",
      "Aplikasi khusus untuk tim",
      "Promosi dan Kode voucher khusus",
    ],
  },
];

export const ApplicationListLogo: { icon?: string; label: string }[] = [
  {
    icon: eCommerceIcon,
    label: "E-commerce",
  },
  {
    icon: companyIcon,
    label: "Company Profile",
  },
  {
    icon: cashierIcon,
    label: "Cashier",
  },
  {
    icon: chatIcon,
    label: "Chat",
  },
  {
    icon: workshopIcon,
    label: "Workshop",
  },
  {
    icon: constructionIcon,
    label: "Construction",
  },
  {
    label: "and many others",
  },
];

export const medsos = [
  {
    icon: facebookIcon,
    alt: "facebook icon",
  },
  {
    icon: twitterIcon,
    alt: "twitter icon",
  },
  {
    icon: youtubeIcon,
    alt: "youtube icon",
  },
  {
    icon: linkedinIcon,
    alt: "linkedin icon",
  },
  {
    icon: instagramIcon,
    alt: "instagram icon",
  },
];
