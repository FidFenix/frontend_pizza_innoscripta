const PRODUCTS_DATA = {
    'classical':{
      id: 1,
      title: 'Classical',
      routeName: 'products/classical',
      items: [
        {
          id: 1,
          name: 'Pizza Good Meals',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/07/24/06/08/pizza-857884_960_720.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Small Pizza Dough Cheese',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/05/19/22/29/pizza-4215447_960_720.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Big Pizza Dough Cheese',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/08/23/13/05/pizza-4425691_960_720.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Pizza Dough Food',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/07/06/09/05/pizza-4319999_960_720.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Food Meal Cheese',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/04/23/08/35/food-3343520_960_720.jpg',
          price: 18
        }
      ]
    },
    'italian':{
      id: 2,
      title: 'Italian',
      routeName: 'products/italian',
      items: [
        {
          id: 10,
          name: 'Focaccia Pizza',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/03/02/14/36/focaccia-656009_960_720.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Pizza Italy',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/01/17/20/44/pizza-1988005_960_720.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'Pizza Tomato Olives',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/10/02/22/24/pizza-2810590_960_720.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Pizzas hot',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/28/15/31/pizza-1626187_960_720.jpg',
          price: 160
        }
      ]
    },
    'vegetarian':{
      id: 3,
      title: 'Vegetarian',
      routeName: 'products/vegetarian',
      items: [
        {
          id: 18,
          name: 'Pizza Tomato Olives',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/10/02/22/24/pizza-2810590_960_720.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Pizza Veggi',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/10/07/10/06/pizza-1721160_960_720.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'Pizza Delicious',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/07/09/09/34/pizza-3525672_960_720.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Fresh Pizza',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/12/10/21/12/fresh-3867756_960_720.jpg',
          price: 165
        }
      ]
    },
    'signature':{ id: 4,
      title: 'Home Signature',
      routeName: 'products/signature',
      items: [
        {
          id: 23,
          name: 'Pizza Dough Tomato',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/11/23/17/16/pizza-2973270_960_720.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Pizza Delicious',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/07/09/09/34/pizza-3525672_960_720.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Pizza Home',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/03/06/17/13/pizza-661973_960_720.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Pizza Slami',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/09/02/15/49/pizza-2707694_960_720.jpg',
          price: 80
        }
      ]
    },
    'american':{
      id: 5,
      title: 'American',
      routeName: 'products/american',
      items: [
        {
          id: 30,
          name: 'Pizza American 1',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/09/23/16/13/pizza-2779378_960_720.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Hawaiian Pizza',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Fast Pizza',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Peperoni and Motzarela',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
          price: 25
        }
      ]
    }
  }
  
  export default PRODUCTS_DATA;