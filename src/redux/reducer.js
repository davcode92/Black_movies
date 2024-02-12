import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

const initState = {
  moviesData: [
    {
      id: Math.random(),
      image:
        "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2876480/5940019/MOVCJ8313__96210.1679586234.jpg?c=2",
      rating: 5,
      name: "Racine",
      date: "Junuary 1977",
      category: "Drama",
    },
    {
      id: Math.random(),
      image:
        "https://sudplanete.net/_uploads/images/films/ROODT_Darrell-James_1992_Sarafina_00.jpg",
      rating: 4,
      name: "Sarafina",
      date: "September 1992",
      category: "Drama",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BZDkzOTFmMTUtMmI2OS00MDE4LTg5YTUtODMwNDMzNmI5OGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: 4,
      name: "Malcome X",
      date: "March 1965",
      category: "Biopic",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc2NzY5NTcxNV5BMl5BanBnXkFtZTcwNTI4MzAyMQ@@._V1_.jpg",
      rating: 4,
      name: "Lumumba",
      date: "September 2000",
      category: "Biopic",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 3,
      name: "Hotel Rwanda",
      date: "December 2004",
      category: "Drama",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/I/810d-PE3SUL._AC_UF894,1000_QL80_.jpg",
      rating: 6,
      name: "Ali",
      date: "December 2011",
      category: "Biopic",
    },
    {
      id: Math.random(),
      image: "https://fr.web.img5.acsta.net/pictures/15/02/04/11/17/060744.jpg",
      rating: 7,
      name: "Selma",
      date: "December 2014",
      category: "Biopic",
    },
    {
      id: Math.random(),
      image:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/72/82/16/19187639.jpg",
      rating: 5,
      name: "Invictus",
      date: "December 2009",
      category: "Biopic",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc4OTczNjgwMl5BMl5BanBnXkFtZTgwMDgxMjAwNzE@._V1_.jpg",
      rating: 10,
      name: "The Black Panthers",
      date: "September 2015",
      category: "Documentary",
    },
    {
      id: Math.random(),
      image:
        "https://dclibrary.libnet.info/images/events/dclibrary/SLVNAME.png",
      rating: 7,
      name: "Slavery by Another Name",
      date: "March 2008",
      category: "Documentary",
    },

    {
      id: Math.random(),
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQGe0wNo_ZOYkb86tGMJdMiqaAeaq9TBSA5xJuzlo3zDv4yl4C",
      rating: 8,
      name: "The African Americans",
      date: "October 2013",
      category: "Documentary",
    },
    {
      id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ea/Who_Killed_Malcolm_X%3F.jpg",
      rating: 7,
      name: "Who Killed Malcolm X?",
      date: "February 2020",
      category: "Documentary",
    },
  ],
};

export const AdsMovie = [
  {
    id: Math.random(),
    movieImg:
      "https://people.com/thmb/tt03SKpWTto55FO0nTuYDCmF9lo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(511x0:513x2)/roots-l-1024-1e3700ab1e5442629e0a66063200cd92.jpg",
    movieName: "Racine",
  },
  {
    id: Math.random(),
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BZmEzNTRhNmUtZjg4MS00NjBhLWFjNDktYzdmMzkzZTM5NzM0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
    movieName: "Sarafina",
  },
  {
    id: Math.random(),
    movieImg:
      "https://picfiles.alphacoders.com/108/108591.jpg",
    movieName: "Malcom X",
  },
  {
    id: Math.random(),
    movieImg:
      "https://diem25.org/wp-content/uploads/2021/01/LumumbaBruxelles1960-1000x563.jpg",
    movieName: "Lumumba",
  },
];

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.filter((el) => el.id !== payload),
      };

    case ADD_MOVIE:
      return {
        ...state,
        moviesData: [...state.moviesData, payload],
      };

    case EDIT_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    default:
      return state;
  }
};
export default reducer;
