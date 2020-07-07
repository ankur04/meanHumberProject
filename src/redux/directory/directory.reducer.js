const INITIAL_STATE = {
  sections: [
    {
      title: 'Bikes',
      imageUrl: 'https://img.drivemag.net/media/default/0002/02/HZF54GP3H45WBSXFFYH3TFDSWY-9264-default-large.jpeg',
      id: 1,
      linkUrl: 'shop/bikes'
    },
    {
      title: 'Cars',
      imageUrl: 'https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349',
      id: 2,
      linkUrl: 'shop/cars'
    },
    {
      title: 'Trucks',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nikola-badger-hero-cc6028e123f5166fd4db8af36e8faee32872bcad7d020758415aa8f52c6e4162-1581433930.jpg',
      id: 3,
      linkUrl: 'shop/trucks'
    },
    {
      title: 'Bicycle',
      imageUrl: 'https://p.vitalmtb.com/photos/users/2/photos/27209/s1600_super8.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bicycles'
    },
    {
      title: 'Boats',
      imageUrl: 'https://images.boats.com/resize/1/47/25/6994725_20190221084210330_1_LARGE.jpg?t=1568141490000',
      size: 'large',
      id: 5,
      linkUrl: 'shop/boats'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
