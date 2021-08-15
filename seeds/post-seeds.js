const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    contents: 'Sed et mollis metus, at faucibus nibh',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    contents: 'Sed et mollis metus, at faucibus nibh',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    contents: 'Sed et mollis metus, at faucibus nibh',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    contents: 'Sed et mollis metus, at faucibus nibh',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    contents: 'Res Ipsa Loquitor',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    contents: 'Res Ipsa Loquitor',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Iupiter es dues',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    contents: 'Iupiter es dues',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    contents: 'Sed et mollis metus, at faucibus nibh',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
