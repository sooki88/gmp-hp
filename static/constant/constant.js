export const MENUS = [
    {
        text: "굿모닝페이",
        sub: [
            { text: "서비스 소개", path: "/about" },
            { text: "가입안내", path: "/register" },
            { text: "주요 고객사", path: "/client" },
            { text: "오시는 길", path: "/map" },
        ],
    },
    {
        text: "결제 서비스",
        sub: [
            { text: "OFF-PG", path: "/pay/off-pg" },
            { text: "전자결제", path: "/pay/electronic" },
            { text: "수기결제", path: "/pay/handwrite" },
            { text: "정기결제", path: "/pay/regular" },
            { text: "원격결제", path: "/pay/sms" },
        ],
    },
    {
        text: "가맹점 가입",
        sub: [
            { text: "신청서류", path: "/documents" },
            { text: "가맹불가업종", path: "/restricted" },
        ],
    },
];
