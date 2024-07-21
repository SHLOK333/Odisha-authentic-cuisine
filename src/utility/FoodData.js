const FoodData = [
    {
        id: 'bf1',
        category: 'Breakfast',
        name: 'Chakuli Ghuguni',
        desc: 'Chakuli Ghuguni is a traditional breakfast from Odisha, combining soft, savory rice and black gram pancakes (chakuli) with a spicy, flavorful yellow pea curry (ghuguni), often garnished with onions, green chilies, and coriander.',
        imgurl: require('../assets/Menu/Breakfast/Chakuli Ghuguni.png'),
        foodtype: 'Veg'
    },
    {
        id: 'bf2',
        category: 'Breakfast',
        name: 'Chakuli Mutton',
        desc: 'Chakuli Mutton is a popular breakfast in Odisha, featuring soft rice and black gram pancakes (chakuli) paired with a rich, spicy mutton curry, creating a hearty and flavorful combination.',
        imgurl: require('../assets/Menu/Breakfast/Chakuli Mutton.jpg'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'bf3',
        category: 'Breakfast',
        name: 'Chuda Kadali',
        desc: 'Chuda Kadali is a traditional Odia breakfast dish made from flattened rice (chuda) mixed with ripe bananas (kadali), often sweetened with jaggery and flavored with cardamom for a simple yet delicious meal.',
        imgurl: require('../assets/Menu/Breakfast/Chuda Kadali.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'bf4',
        category: 'Breakfast',
        name: 'Dahibara Aloodum',
        desc: 'Dahibara Aloodum is a popular breakfast in Odisha, consisting of soft lentil fritters soaked in seasoned yogurt (dahibara) served with a spicy potato curry (aloodum) and garnished with sev, onions, and coriander.',
        imgurl: require('../assets/Menu/Breakfast/Dahibara Aloodum.png'),
        foodtype: 'Veg'
    },
    {
        id: 'bf5',
        category: 'Breakfast',
        name: 'Enduri Pitha',
        desc: 'Enduri Pitha is a traditional Odia breakfast, featuring steamed rice flour dumplings filled with a sweet coconut and jaggery mixture, wrapped in turmeric leaves, and typically prepared during festivals.',
        imgurl: require('../assets/Menu/Breakfast/Enduri Pitha.png'),
        foodtype: 'Veg'
    },
    {
        id: 'bf6',
        category: 'Breakfast',
        name: 'Puri Upma',
        desc: 'Puri Upma is a popular breakfast in Odisha, where crispy, deep-fried puris are paired with a savory semolina porridge (upma) cooked with vegetables and spices, offering a delightful mix of textures and flavors.',
        imgurl: require('../assets/Menu/Breakfast/Puri Upma.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'bf7',
        category: 'Breakfast',
        name: 'Suji Upma',
        desc: 'Suji Upma is a savory Odia breakfast made from roasted semolina, cooked with vegetables and seasoned with mustard seeds, curry leaves, and spices.',
        imgurl: require('../assets/Menu/Breakfast/Suji Upma.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'bf8',
        category: 'Breakfast',
        name: 'Pullano',
        desc: 'Pullano is a traditional Odia breakfast made from fermented rice batter, typically served with a variety of chutneys and curries.',
        imgurl: require('../assets/Menu/Breakfast/Pullano.png'),
        foodtype: 'Veg'
    },
    {
        id: 'bf9',
        category: 'Breakfast',
        name: 'Bara Ghuguni',
        desc: 'Bara Ghuguni is a popular Odia breakfast combination featuring deep-fried lentil fritters (Bara) served with a spicy and tangy yellow pea curry (Ghuguni).',
        imgurl: require('../assets/Menu/Breakfast/Bara Ghuguni.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'lh1',
        category: 'Lunch',
        name: 'Chhatu Patrapoda',
        desc: 'Chhatu Patrapoda is a traditional Odia lunch dish featuring spicy, flavorful mushroom curry cooked with a variety of spices and wrapped in banana leaves, which imparts a unique aroma and taste.',
        imgurl: require('../assets/Menu/Lunch/chhatu Patrapoda.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'lh2',
        category: 'Lunch',
        name: 'Chingudi Tarakari',
        desc: 'Chingudi Tarkari is a flavorful Odia lunch dish made with succulent prawns (chhhingudi) simmered in a rich, spiced curry with ingredients like tomatoes, onions, and aromatic spices.',
        imgurl: require('../assets/Menu/Lunch/Chingudi Tarakari.png'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'lh3',
        category: 'Lunch',
        name: 'Kanika',
        desc: 'Kanika is a traditional Odia lunch dish consisting of sweet, aromatic rice cooked with spices, ghee, and dry fruits, often enjoyed as a festive or special meal.',
        imgurl: require('../assets/Menu/Lunch/Kanika.jpg'),
       foodtype: 'Veg'
    },
    {
        id: 'lh4',
        category: 'Lunch',
        name: 'Machha Besara',
        desc: 'Machha Besara is a classic Odia lunch dish featuring fish cooked in a tangy and spicy mustard seed gravy with ingredients like garlic, ginger, and curry leaves.',
        imgurl: require('../assets/Menu/Lunch/Machha Besara.png'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'lh5',
        category: 'Lunch',
        name: 'Machha Chencheda',
        desc: 'Machha Chencheda is a traditional Odia lunch dish made with fish simmered in a tangy tomato and spice-based curry, often flavored with garlic, ginger, and curry leaves.',
        imgurl: require('../assets/Menu/Lunch/Machha Chencheda.jpg'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'lh6',
        category: 'Lunch',
        name: 'Pakhala Meal',
        desc: 'Pakhala Meal is a traditional Odia lunch featuring fermented rice soaked in water (pakhala) served with an array of side dishes like fried or curried vegetables, fish, and pickles for a refreshing and wholesome meal.',
        imgurl: require('../assets/Menu/Lunch/Pakhala Meal.png'),
        foodtype: 'Veg'
    },
    {
        id: 'lh7',
        category: 'Lunch',
        name: 'Ada Anna',
        desc: 'Ada Anna is a traditional Odia lunch dish made of rice cooked with ginger, coconut, and spices, offering a unique blend of flavors and aromas.',
        imgurl: require('../assets/Menu/Lunch/Ada Anna.png'),
        foodtype: 'Veg'
    },
    {
        id: 'lh8',
        category: 'Lunch',
        name: 'Besara Bhaja',
        desc: 'Besara Bhaja is a traditional Odia lunch dish featuring vegetables or fish fried in a mustard paste, delivering a tangy and spicy flavor.',
        imgurl: require('../assets/Menu/Lunch/Besara Bhaja.png'),
        foodtype: 'Veg'
    },
    {
        id: 'lh9',
        category: 'Lunch',
        name: 'Machha Manji',
        desc: 'Machha Manji is a traditional Odia lunch dish consisting of fish heads cooked with vegetables and spices, offering a rich and flavorful taste.',
        imgurl: require('../assets/Menu/Lunch/Machha Manji.png'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'sk1',
        category: 'Snacks',
        name: 'Aloochap Mudhi',
        desc: 'Aloo Chaat Mudhi is a popular Odia snack made with crispy puffed rice (mudhi) mixed with spicy, tangy boiled potatoes (aloo), onions, and chutneys for a crunchy and flavorful treat.',
        imgurl: require('../assets/Menu/Snacks/Aloochap Mudhi.png'),
        price: 150
    },
    {
        id: 'sk2',
        category: 'Snacks',
        name: 'Ghuguni Chaat',
        desc: 'Ghuguni Chaat is a delicious Odia snack featuring spiced yellow pea curry (ghuguni) topped with onions, green chilies, and chutneys, offering a tangy and flavorful experience.',
        imgurl: require('../assets/Menu/Snacks/Ghuguni Chaat.jpg'),
        price: 125
    },
    {
        id: 'sk3',
        category: 'Snacks',
        name: 'Gulugula',
        desc: 'Gulugula is a popular Odia snack consisting of small, round, and fluffy sweet fritters made from rice flour and jaggery, offering a soft, mildly sweet treat.',
        imgurl: require('../assets/Menu/Snacks/Gulugula.png'),
        price: 100
    },
    {
        id: 'sk4',
        category: 'Snacks',
        name: 'Nimki',
        desc: 'Nimki is a crunchy Odia snack made from spiced, deep-fried wheat flour dough, offering a savory and crispy bite perfect for tea-time or as a light snack.',
        imgurl: require('../assets/Menu/Snacks/Nimki.png'),
        price: 150
    },
    {
        id: 'sk5',
        category: 'Snacks',
        name: 'Segadalu',
        desc: 'Segadalu are crispy, savory Odia snacks made from roasted rice flour and seasoned with spices, creating a crunchy and flavorful treat often enjoyed with tea.',
        imgurl: require('../assets/Menu/Snacks/Segadalu.jpg'),
        price: 100
    },
    {
        id: 'sk6',
        category: 'Snacks',
        name: 'Utangulu',
        desc: 'Utangulu are savory Odia snacks made from a spicy mix of rice flour and lentil flour, shaped into small balls and deep-fried until crispy, offering a crunchy and flavorful bite.',
        imgurl: require('../assets/Menu/Snacks/Utangulu.jpg'),
        price: 150
    },
   {
        id: 'sk7',
        category: 'Snacks',
        name: 'Gupchup',
        desc: 'Gupchup, also known as pani puri, is a popular Odia street snack featuring crispy hollow puris filled with spicy and tangy flavored water.',
        imgurl: require('../assets/Menu/Snacks/Gupchup.jpeg'),
        price: 150
    },
    {
        id: 'sk8',
        category: 'Snacks',
        name: 'piaji',
        desc: 'Piaji is a crispy and spicy Odia snack made from deep-fried lentil and onion fritters, often enjoyed with chutney or as a tea-time treat.',
        imgurl: require('../assets/Menu/Snacks/piaji.jpg'),
        price: 250
    },
    {
        id: 'sk9',
        category: 'Snacks',
        name: 'Pumpkin Flower Pakoda',
        desc: 'Pumpkin Flower Pakoda is a delicious Odia snack made by deep-frying pumpkin flowers dipped in a seasoned chickpea flour batter.',
        imgurl: require('../assets/Menu/Snacks/Pumpkin Flower Pakoda.png'),
        price: 200
    },
    {
        id: 'dn1',
        category: 'Dinner',
        name: 'Badi aloo Tarakari',
        desc: 'Badi Aloo Tarkari is a classic Odia dinner dish featuring crispy lentil dumplings (badi) cooked with tender potatoes (aloo) in a rich, spiced gravy for a hearty and flavorful meal.',
        imgurl: require('../assets/Menu/Dinner/Badi aloo Tarakari.png'),
        foodtype: 'Veg'
    },
    {
        id: 'dn2',
        category: 'Dinner',
        name: 'Chicken Kasa',
        desc: 'Chicken Kasa is a flavorful Odia dinner dish made with succulent chicken pieces simmered in a rich, spicy gravy of onions, tomatoes, and a blend of aromatic spices for a hearty meal.',
        imgurl: require('../assets/Menu/Dinner/Chicken Kasa.png'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'dn3',
        category: 'Dinner',
        name: 'Dalma',
        desc: 'Dalma is a traditional Odia dinner dish made with lentils cooked with a mix of vegetables and seasoned with a blend of spices, offering a nutritious and comforting meal.',
        imgurl: require('../assets/Menu/Dinner/Dalma.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'dn4',
        category: 'Dinner',
        name: 'Mudhi Mutton',
        desc: 'Mudhi Mutton is a popular Odia dinner dish featuring spicy, tender mutton curry (mutton) served with crispy puffed rice (mudhi), blending rich flavors with a crunchy texture.',
        imgurl: require('../assets/Menu/Dinner/Mudhi Mutton.jpg'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'dn5',
        category: 'Dinner',
        name: 'Poi saga',
        desc: 'Poi Saga is a nutritious Odia dinner dish made with poi leaves cooked with spices, garlic, and sometimes lentils, offering a simple yet flavorful and healthy vegetable side.',
        imgurl: require('../assets/Menu/Dinner/Poi saga.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'dn6',
        category: 'Dinner',
        name: 'Santoola',
        desc: 'Santoola is a traditional Odia dinner dish made with a mix of vegetables and chickpeas, simmered in a mildly spiced gravy for a wholesome and comforting meal.',
        imgurl: require('../assets/Menu/Dinner/Santoola.png'),
        foodtype: 'Veg'
    },
    {
        id: 'dn7',
        category: 'Dinner',
        name: 'Panasa Tarakari',
        desc: 'Panasa Tarkari is an Odia dinner dish featuring tender jackfruit cooked in a savory and spicy gravy, often combined with aromatic spices for a unique and flavorful experience.',
        imgurl: require('../assets/Menu/Dinner/Panasa Tarakari.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'dn8',
        category: 'Dinner',
        name: 'Muga Dali Palanga Tarakari',
        desc: 'Muga Dali Palanga Tarkari is a wholesome Odia dinner dish made with yellow moong dal (mung beans) and spinach, simmered with spices for a nutritious and flavorful meal.',
        imgurl: require('../assets/Menu/Dinner/Muga Dali Palanga Tarakari.jpg'),
        foodtype: 'Veg'
    },
    {
        id: 'dn9',
        category: 'Dinner',
        name: 'Chicken Pulao',
        desc: 'Chicken Pulao is a flavorful Odia dinner dish featuring tender chicken pieces cooked with fragrant basmati rice and aromatic spices.',
        imgurl: require('../assets/Menu/Dinner/Chicken Pulao.jpg'),
        foodtype: 'Non-Veg'
    },
    {
        id: 'ds1',
        category: 'Desserts',
        name: 'Chhenapoda',
        desc: 'Chhenapoda is a classic Odia dessert made from cottage cheese (chhena) mixed with sugar, cardamom, and dry fruits, then baked until caramelized for a deliciously sweet and rich treat.',
        imgurl: require('../assets/Menu/Desserts/Chhenapoda.jpg'),
        price: 120
    },
    {
        id: 'ds2',
        category: 'Desserts',
        name: 'Feni',
        desc: 'Feni is a traditional Odia dessert made from fermented rice and coconut, shaped into small cakes and steamed to create a sweet and aromatic delicacy often enjoyed during festivals.',
        imgurl: require('../assets/Menu/Desserts/Feni.jpg'),
        price: 100
    },
    {
        id: 'ds3',
        category: 'Desserts',
        name: 'Labanga Latika',
        desc: 'Labanga Latika is a popular Odia dessert consisting of crispy, deep-fried pastries stuffed with a sweet mixture of coconut, jaggery, and spices, and garnished with cloves (labanga) for a delightful treat.',
        imgurl: require('../assets/Menu/Desserts/Labanga Latika.jpg'),
        price: 120
    },
    {
        id: 'ds4',
        category: 'Desserts',
        name: 'Rasabali',
        desc: 'Rasabali is a traditional Odia dessert featuring deep-fried bread soaked in a rich, sweet milk and cardamom syrup, offering a deliciously indulgent and aromatic treat.',
        imgurl: require('../assets/Menu/Desserts/Rasabali.jpeg'),
        price: 175
    },
    {
        id: 'ds5',
        category: 'Desserts',
        name: 'Rasagola',
        desc: 'Rasgola is a beloved Odia dessert made from soft, spongy cottage cheese balls soaked in a sweet syrup, offering a deliciously sweet and fragrant treat.',
        imgurl: require('../assets/Menu/Desserts/Rasagola.jpg'),
        price: 120
    },
    {
        id: 'ds6',
        category: 'Desserts',
        name: 'Sita Bhoga',
        desc: 'Sita Bhoga is a traditional Odia dessert comprising sweetened rice flour dumplings mixed with cardamom and nuts, often served with chhena (cottage cheese) and sugar syrup for a rich, festive treat. ',
        imgurl: require('../assets/Menu/Desserts/Sita Bhoga.jpg'),
        price: 100
    },
    {
        id: 'ds7',
        category: 'Desserts',
        name: 'Arisa',
        desc: 'Arisa is a traditional Odia dessert made from rice flour, jaggery, and sesame seeds, fried to a crispy and sweet perfection.',
        imgurl: require('../assets/Menu/Desserts/Arisa.jpg'),
        price: 120
    },
    {
        id: 'ds8',
        category: 'Desserts',
        name: 'Manda pitha',
        desc: 'Manda Pitha is a steamed dessert from Odisha made with rice flour, filled with a sweet mixture of coconut, jaggery, and cardamom.',
        imgurl: require('../assets/Menu/Desserts/Manda pitha.jpg'),
        price: 200
    },
    {
        id: 'ds9',
        category: 'Desserts',
        name: 'Poda Pitha',
        desc: 'Poda Pitha is a traditional Odisha dessert made from rice flour, jaggery, and coconut, baked to perfection for a caramelized crust and a soft, sweet interior.',
        imgurl: require('../assets/Menu/Desserts/Poda Pitha.jpg'),
        price: 250
    },
    {
        id: 'bv1',
        category: 'Beverages',
        name: 'Bela Pana',
        desc: 'Bela Pana is a refreshing Odia beverage made from wood apple pulp, mixed with jaggery, banana, and spices, typically enjoyed during the summer for its cooling properties.',
        imgurl: require('../assets/Menu/Beverages/Bela Pana.jpg'),
        price: 80
    },
    {
        id: 'bv2',
        category: 'Beverages',
        name: 'Chhena pana',
        desc: 'Chhena Pana is a traditional Odia beverage made from cottage cheese, milk, and jaggery, blended with spices and often served chilled as a refreshing drink.',
        imgurl: require('../assets/Menu/Beverages/Chhena pana.jpg'),
        price: 120
    },
    {
        id: 'bv3',
        category: 'Beverages',
        name: 'Dahi Pana',
        desc: 'Dahi Pana is a traditional Odia beverage made from curd, water, jaggery, and spices, providing a refreshing and cooling drink, especially enjoyed in the summer.',
        imgurl: require('../assets/Menu/Beverages/Dahi Pana.jpg'),
        price: 90
    },
    {
        id: 'bv4',
        category: 'Beverages',
        name: 'Mandia Peja',
        desc: 'Mandia Peja is a nutritious Odia beverage made from ragi (finger millet) flour, cooked with water and sometimes sweetened, often consumed as a cooling drink.',
        imgurl: require('../assets/Menu/Beverages/Mandia Peja.png'),
        price: 75
    },
    {
        id: 'bv5',
        category: 'Beverages',
        name: 'Rabdi Lassi',
        desc: 'Rabdi Lassi is a rich and creamy Odia beverage made from lassi (yogurt drink) topped with rabdi (sweetened condensed milk), offering a delicious blend of textures and flavors.',
        imgurl: require('../assets/Menu/Beverages/Rabdi Lassi.jpeg'),
        price: 120
    },
    {
        id: 'bv6',
        category: 'Beverages',
        name: 'Tanka Torani',
        desc: 'Tanka Torani is a traditional Odia beverage made from fermented rice water, seasoned with salt, ginger, and spices, providing a refreshing and tangy drink often enjoyed during hot weather.',
        imgurl: require('../assets/Menu/Beverages/Tanka Torani.jpg'),
        price: 120
    },
   {
        id: 'bv7',
        category: 'Beverages',
        name: 'Amba Pana',
        desc: 'Amba Pana is a refreshing Odisha beverage made from ripe mango pulp, yogurt, and spices, offering a sweet and tangy drink that helps beat the summer heat.',
        imgurl: require('../assets/Menu/Beverages/Amba Pana.jpeg'),
        price: 120
    },
    {
        id: 'bv8',
        category: 'Beverages',
        name: 'Khajuri Misri Sarbat',
        desc: 'Khajuri Misri Sarbat is a traditional Odisha beverage made from palm sugar (khajuri) and rock sugar (misri), offering a sweet and cooling drink perfect for hot days.',
        imgurl: require('../assets/Menu/Beverages/Khajuri Misri Sarbat.jpeg'),
        price: 150
    },
    {
        id: 'bv9',
        category: 'Beverages',
        name: 'Nimbu Sarbat',
        desc: 'Nimbu Sarbat is a refreshing Odisha beverage made from freshly squeezed lemon juice, water, and sugar, often flavored with a pinch of salt and mint.',
        imgurl: require('../assets/Menu/Beverages/Nimbu Sarbat.jpeg'),
        price: 80
    },
]

export default FoodData;