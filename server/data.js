const data = [
  {
    name: "White Sweater TShirt",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Vivamus suscipit.",
    longDescription:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\n",
    price: 15,
    category: "topRated",
    createdAt: "2022-10-17T17:17:21.884Z",
    updatedAt: "2022-10-17T17:17:23.404Z",
    publishedAt: "2022-10-17T17:17:23.402Z",
    image: 2,
  },
  {
    name: "Evening Text Shirt",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.",
    longDescription:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.\n\nVivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    price: 20,
    category: "bestSellers",
    createdAt: "2022-10-17T17:18:42.870Z",
    updatedAt: "2022-10-17T17:18:43.928Z",
    publishedAt: "2022-10-17T17:18:43.927Z",
    image: 20,
  },
  {
    name: "White Dress Light",
    shortDescription:
      "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam.",
    longDescription:
      "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    price: 60,
    category: "topRated",
    createdAt: "2022-10-17T17:19:11.770Z",
    updatedAt: "2022-10-17T17:19:12.929Z",
    publishedAt: "2022-10-17T17:19:12.928Z",
    image: 15,
  },
  {
    name: "Floral Shirt",
    shortDescription: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    longDescription:
      "Sed porttitor lectus nibh. Sed porttitor lectus nibh. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.\n\nProin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    price: 70,
    category: "topRated",
    createdAt: "2022-10-17T17:20:00.720Z",
    updatedAt: "2022-10-17T17:20:01.487Z",
    publishedAt: "2022-10-17T17:20:01.486Z",
    image: 10,
  },
  {
    name: "Black Graphic T Shirt",
    shortDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    longDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Proin eget tortor risus.\n\nDonec rutrum congue leo eget malesuada. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt.",
    price: 30,
    category: "bestSellers",
    createdAt: "2022-10-17T17:20:37.845Z",
    updatedAt: "2022-10-17T17:20:38.905Z",
    publishedAt: "2022-10-17T17:20:38.904Z",
    image: 13,
  },
  {
    name: "Black Text T Shirt",
    shortDescription:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    longDescription:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.\n\nVivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    price: 15,
    category: "topRated",
    createdAt: "2022-10-17T17:21:07.198Z",
    updatedAt: "2022-10-17T17:21:07.910Z",
    publishedAt: "2022-10-17T17:21:07.909Z",
    image: 11,
  },
  {
    name: "Black and White Striped Pants",
    shortDescription:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. ",
    longDescription:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.\n\nProin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
    price: 50,
    category: "newArrivals",
    createdAt: "2022-10-17T17:21:44.032Z",
    updatedAt: "2022-10-17T17:21:44.766Z",
    publishedAt: "2022-10-17T17:21:44.765Z",
    image: 7,
  },
  {
    name: "Road T Shirt White",
    shortDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. ",
    longDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.",
    price: 20,
    category: "topRated",
    createdAt: "2022-10-17T17:22:24.101Z",
    updatedAt: "2022-10-17T17:22:24.796Z",
    publishedAt: "2022-10-17T17:22:24.794Z",
    image: 1,
  },
  {
    name: "White Dress Shirt Formal",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus",
    longDescription:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.\n\nNulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.",
    price: 50,
    category: "topRated",
    createdAt: "2022-10-17T17:22:56.156Z",
    updatedAt: "2022-10-17T17:22:56.783Z",
    publishedAt: "2022-10-17T17:22:56.781Z",
    image: 6,
  },
  {
    name: "Text Black T Shirt Short Sleeve",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.",
    longDescription:
      "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.\n\nCurabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    price: 20,
    category: "bestSellers",
    createdAt: "2022-10-17T17:23:27.586Z",
    updatedAt: "2022-10-17T17:23:28.310Z",
    publishedAt: "2022-10-17T17:23:28.309Z",
    image: 19,
  },
  {
    name: "Heart Break T Shirt Graphic",
    shortDescription:
      "Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
    longDescription:
      "Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.\n\nSed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    price: 15,
    category: "bestSellers",
    createdAt: "2022-10-17T17:23:58.087Z",
    updatedAt: "2022-10-17T17:23:58.890Z",
    publishedAt: "2022-10-17T17:23:58.889Z",
    image: 5,
  },
  {
    name: "Stylish Black Top",
    shortDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    longDescription:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.\n\nCurabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
    price: 40,
    category: "newArrivals",
    createdAt: "2022-10-17T17:24:33.872Z",
    updatedAt: "2022-10-17T17:24:34.614Z",
    publishedAt: "2022-10-17T17:24:34.613Z",
    image: 14,
  },
  {
    name: "Formal Dress Shirt Stylish",
    shortDescription:
      "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    longDescription:
      "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPraesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
    price: 50,
    category: "topRated",
    createdAt: "2022-10-17T17:25:06.030Z",
    updatedAt: "2022-10-17T17:25:06.629Z",
    publishedAt: "2022-10-17T17:25:06.627Z",
    image: 8,
  },
  {
    name: "Au Revor T Shirt",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia ",
    longDescription:
      "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\n\nNulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    price: 15,
    category: "newArrivals",
    createdAt: "2022-10-17T17:25:33.661Z",
    updatedAt: "2022-10-17T17:25:34.378Z",
    publishedAt: "2022-10-17T17:25:34.377Z",
    image: 12,
  },
  {
    name: "Graphic Basketball T Shirt Urban",
    shortDescription:
      "Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.\n",
    longDescription:
      "Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 20,
    category: "newArrivals",
    createdAt: "2022-10-17T17:26:09.137Z",
    updatedAt: "2022-10-17T17:26:10.344Z",
    publishedAt: "2022-10-17T17:26:10.343Z",
    image: 16,
  },
  {
    name: "White Tank T Shirt",
    shortDescription:
      "Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. ",
    longDescription:
      "Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.\n\nDonec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    price: 25,
    category: "newArrivals",
    createdAt: "2022-10-17T17:26:48.382Z",
    updatedAt: "2022-10-17T17:26:49.096Z",
    publishedAt: "2022-10-17T17:26:49.095Z",
    image: 9,
  },
  {
    name: "Grey T Shirt Short Sleeve Casual",
    shortDescription:
      "Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.\n",
    longDescription:
      "Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.\n\nDonec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    price: 15,
    category: "bestSellers",
    createdAt: "2022-10-17T17:27:19.396Z",
    updatedAt: "2022-10-17T17:27:20.193Z",
    publishedAt: "2022-10-17T17:27:20.192Z",
    image: 4,
  },
  {
    name: "Grey Granny Sweater",
    shortDescription:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus.",
    longDescription:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\n\nVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    price: 40,
    category: "bestSellers",
    createdAt: "2022-10-17T17:27:53.569Z",
    updatedAt: "2022-10-17T17:27:54.337Z",
    publishedAt: "2022-10-17T17:27:54.336Z",
    image: 3,
  },
]

module.exports = data
