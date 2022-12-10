export  const  Products = [
    {
        id:1,
        names:"LG",
        image :[require("../assets/LG/1.avif"),
        require("../assets/LG/2.avif"),
        require("../assets/LG/3.png"),
        require("../assets/LG/4.png")],
        price:'389',
        where_to_buy:'https://www.payngo.co.il/catalog/product/view/id/134377/s/295232/category/105/',
        description:[
            "מסך בגודל 21.45 אינץ' מסוג VA קצב ריענון 75Hz 5ms"
            ,"מספק תמונה מדויקת וברורה באמצעות דיוק צבע יוצא דופן",
            "פיצול התצוגה או התאמת אפשרויות צג בסיסיות בכמה לחיצות",
            "תכונות מיוחדות: מצב קריאה, מצב בטוח מפני הבהוב, FreeSync"
        ]
    },
    {
        id:2,
        names:"ASUS",
        image :[require("../assets/ASUS/1.webp"),
        require("../assets/ASUS/2.webp"),
        require("../assets/ASUS/3.webp"),
        ],
        price:'579',
        where_to_buy:'https://www.payngo.co.il/catalog/product/view/id/48993/s/235689/category/105/'
        ,description:[
            "תצוגה: צג FHD בגודל 21.5 אינץ",
            "רזולוציה: 1920x1080",
            "סוג פנל: TN",
            "זמן תגובה 1ms",
            "כולל רמקולים מובנים"
        ]
    },
    {
        id:3,
        names:"SAMSUNG",
        image :[require("../assets/SAMSUNG/1.webp"),
        require("../assets/SAMSUNG/2.avif"),
        require("../assets/SAMSUNG/3.avif"),
        require("../assets/SAMSUNG/4.avif")],
        price:'589',
        where_to_buy:'https://www.payngo.co.il/computers-pcs/peripheral-equipment/computer-screens/256648.html'
        ,description:[
            "מסך שטוח בגודל 24 אינץ' מסוג PLS LED קצב ריענון 60Hz",
            'פרופיל דק להדהים 10 מ"מ בעובי של עט כדורי פאנל One Piece',
            "זווית צפייה רחבה במיוחד לצפייה מושלמת מכל מקום של 178 מעלות",
            "תכונות מיוחדות: AMD Freesync, Game Mode, Eye Saver"
        ]
    },
    {
        id:4,
        names:"Lenovo",
        image :[require("../assets/LENOVO/1.avif"),
        require("../assets/LENOVO/2.png"),
        require("../assets/LENOVO/3.png"),
        require("../assets/LENOVO/4.png")],
        price:'464',
        where_to_buy:'https://www.payngo.co.il/computers-pcs/peripheral-equipment/computer-screens/291582.html',
        description:[
            "הסמכת TÜV Rheinland לנוחות עיניים",
            "מסך בגודל 23.8 אינץ' מסוג VA קצב ריענון 75Hz",
            'לצג יש יכולת הרכבה של 100 מ"מ על 100 מ"מ VESA',
            "רזולוציית FHD 1920x1080 ללא מסגרת מספקים 178 זוויות צפייה"
        ]
    },

]

export const getItemById =(id) => {
  return  Products.find(item=> item.id === id)
}