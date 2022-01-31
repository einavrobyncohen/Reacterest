export const categories = [
  {
    name: "Modern",
    image:
      "https://i.pinimg.com/564x/0c/a6/db/0ca6db6721c07ce0af4d2cd335265f2a.jpg",
  },
  {
    name: "Contemporary",
    image:
      "https://i.pinimg.com/564x/1c/91/53/1c915366350653bd09730c5e3c6d747c.jpg",
  },
  {
    name: "Art Moderne",
    image:
      "https://i.pinimg.com/564x/df/c3/af/dfc3af04a75a5f2005452ba9c471fe34.jpg",
  },
  {
    name: "Mid-Century",
    image:
      "https://i.pinimg.com/564x/ae/e0/b4/aee0b4f7d0b981fbf5c315bd96926dad.jpg",
  },
  {
    name: "Minimalist",
    image:
      "https://foyr.com/learn/wp-content/uploads/2020/04/minimalist-1920x1252.jpg",
  },
  {
    name: "Scandinavian",
    image:
      "https://foyr.com/learn/wp-content/uploads/2020/04/scanda-1920x1848.png",
  },
  {
    name: "Shabby",
    image:
      "https://foyr.com/learn/wp-content/uploads/2020/04/shabbi-1920x1080.jpg",
  },
  {
    name: "Eclectic",
    image:
      "https://i.pinimg.com/564x/ca/d8/5a/cad85adfde3af058113aed419fbf4aeb.jpg",
  },
  {
    name: "Industrial",
    image:
      "https://i.pinimg.com/564x/45/dc/2a/45dc2a0aa3e597811e5821bb9be9d9ae.jpg",
  },
  {
    name: "Farmhouse",
    image:
      "https://i.pinimg.com/564x/63/9e/b9/639eb9d5f7a71e4191446ba02a0fed35.jpg",
  },
  {
    name: "Coastal",
    image:
      "https://freshome.com/wp-content/uploads/2017/08/soothing-colors.jpg",
  },
  {
    name: "Maximalism",
    image:
      "https://thespaces.com/wp-content/uploads/2017/11/cabana-magazine-martina-mondadori-01-1-1477x985.jpg",
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};