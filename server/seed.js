const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Perfume = require('./models/perfume');
const Review = require('./models/review');

const perfumes = [
  {
    name: 'Eau de Parfum',
    description: 'A timeless fragrance. Eau de Parfum is a classic scent with notes of jasmine and sandalwood.',
    price: 75.00,
    rating: 4.8,
    category: 'floral',
    image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
    images: [
      'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gV_-U9Cee_aEsGU016KnQbNjYukdumaWiuiRxcgjH39wiUxb_xXcBRR_rIqMa4XDFsw&usqp=CAU'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Floral Essence',
    description: 'Floral Essence offers a bouquet of fresh flowers, perfect for springtime.',
    price: 65.00,
    rating: 4.6,
    category: 'floral',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDLwTHJR_mv_loZ482Yo39sXh5dIuO9081Q&s',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDLwTHJR_mv_loZ482Yo39sXh5dIuO9081Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6VaCas1-pXKH3GqwK7mJUsmLQbahck_Jpb0dWKW0DXGSrdS2m4LdVHTegwClb6EsXyo&usqp=CAU'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Mystic Oud',
    description: 'Mystic Oud combines rich oud notes with hints of amber for a captivating aroma.',
    price: 120.00,
    rating: 4.9,
    category: 'woody',
    image: 'https://perfumeuae.com/wp-content/uploads/2024/07/Habit-Rouge-Le-Parfum-1.jpg',
    images: [
      'https://perfumeuae.com/wp-content/uploads/2024/07/Habit-Rouge-Le-Parfum-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-FcmkqjP75eniqAyKNRspTC4xvjYnuHXhPL7DH7rHEpSn40vxvIlKB4VfYlCtilCTG0&usqp=CAU'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Citrus Splash',
    description: 'Citrus Splash brings a burst of lemon and bergamot, perfect for daily wear.',
    price: 55.00,
    rating: 4.3,
    category: 'citrus',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oYyX7tybZSo8pm0tIRsnuFXGG5CQLcihlmgZLjQv1mCtu8ZnzDzXjXCQNqsYxPmWgIw&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oYyX7tybZSo8pm0tIRsnuFXGG5CQLcihlmgZLjQv1mCtu8ZnzDzXjXCQNqsYxPmWgIw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5plWi0mvOBsHmY8-LFTTb35qIRWgdRuW1BgEVnyn0SOxExfhK-uMmxjccLVapISjXiw&usqp=CAU'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Amber Nights',
    description: 'Amber Nights blends warm amber with vanilla and musk, ideal for evening occasions.',
    price: 85.00,
    rating: 4.7,
    category: 'woody',
    image: 'https://dev.guerlain.com/dw/image/v2/BDCZ_DEV/on/demandware.static/-/Sites-GSA_master_catalog/default/dw7c566db3/Secondary_visuals_2/2021/A&M/AM_SECONDARY-VISUAL_PRODUCT-PAGE_SANTAL-PAO-ROSA.jpg?sw=655&sh=655&sfrm=jpg',
    images: [
      'https://dev.guerlain.com/dw/image/v2/BDCZ_DEV/on/demandware.static/-/Sites-GSA_master_catalog/default/dw7c566db3/Secondary_visuals_2/2021/A&M/AM_SECONDARY-VISUAL_PRODUCT-PAGE_SANTAL-PAO-ROSA.jpg?sw=655&sh=655&sfrm=jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0f6RfvcCKsXEoWigRIKHFVXaP9TXOXQ5HFCH4rBMulg9n_daFEpOkrJsKdN8w5rIK5Y&usqp=CAU'
    ],
    availableSizes: ['50ml', '100ml'],
  },
   {
    name: 'Leafy Aroma',
    description: 'A refreshing blend with earthy notes and natural charm.',
    price: 68.00,
    rating: 4.4,
    category: 'herbal',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://media.istockphoto.com/id/1369608906/photo/two-bottles-of-perfume-and-green-leaves.jpg?s=1024x1024&w=is&k=20&c=w5iyTCHK7DaxG8ds5sKPzQkqi2IsvH7Gvzy9dlYJVPA='
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Morning Whisper',
    description: 'Gentle floral fragrance perfect for early mornings.',
    price: 72.00,
    rating: 4.5,
    category: 'floral',
    image: 'https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv',
    images: [
      'https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv',
      'https://images.unsplash.com/photo-1578996824031-524b7b23eb20?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Amber Bloom',
    description: 'Deep and warm scent with golden amber richness.',
    price: 95.00,
    rating: 4.7,
    category: 'woody',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1594035910663-369b72b7abe2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Pink Frost',
    description: 'A chilled fruity-floral blend for summer evenings.',
    price: 60.00,
    rating: 4.2,
    category: 'citrus',
    image: 'https://images.unsplash.com/photo-1680607622395-9c950a984612?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1680607622395-9c950a984612?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1680607618721-1a308edc6851?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Crisp Musk',
    description: 'Light musk tones paired with floral notes.',
    price: 58.00,
    rating: 4.1,
    category: 'musk',
    image: 'https://images.unsplash.com/photo-1680503504148-25f2d178ff05?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1680503504148-25f2d178ff05?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1680503504111-1bbc7fc2103e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Ocean Noir',
    description: 'Cool and mysterious aquatic blend for bold personalities.',
    price: 78.00,
    rating: 4.6,
    category: 'aquatic',
    image: 'https://images.unsplash.com/photo-1708486235073-14879ff14c4c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1708486235073-14879ff14c4c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708486855543-6010a133280f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  },
  {
    name: 'Velvet Woods',
    description: 'Woody and soft blend with a luxurious feel.',
    price: 89.00,
    rating: 4.8,
    category: 'woody',
    image: 'https://images.unsplash.com/photo-1706924179763-7f2744656823?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1706924179763-7f2744656823?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979165880-dd0ff61fa748?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    availableSizes: ['50ml', '100ml'],
  }
];

const reviews = [
  {
    username: 'JaneDoe',
    stars: 5,
    comment: 'Absolutely love this fragrance! It lasts all day.'
  },
  {
    username: 'JohnSmith',
    stars: 4,
    comment: 'Great scent, but the bottle could be nicer.'
  },
  {
    username: 'PerfumeLover',
    stars: 5,
    comment: 'A perfect blend of floral and woody notes.'
  },
  {
    username: 'ScentFanatic',
    stars: 3,
    comment: 'Good fragrance, but a bit too strong for my taste.'
  }
];

const seedDatabase = async () => {
  console.log('🌱 Seeding database...');
  try {
    await Perfume.deleteMany({});
    await Review.deleteMany({});
    console.log('🗑️ Cleared existing perfumes and reviews');

    for (const p of perfumes) {
      const perfume = new Perfume(p);
      await perfume.save();

      const numberOfReviews = Math.floor(Math.random() * reviews.length) + 1;
      const selectedReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, numberOfReviews);

      for (const rev of selectedReviews) {
        const review = new Review({
          perfumeId: perfume._id,
          username: rev.username,
          comment: rev.comment,
          stars: rev.stars
        });
        await review.save();
      }
      console.log(`✅ Seeded: ${perfume.name}`);
    }

    console.log('🎉 Seeding completed.');
  } catch (err) {
    console.error('❌ Seeding error:', err);
  }
};

module.exports = seedDatabase;