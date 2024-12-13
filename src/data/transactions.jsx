import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const transactions = [
    {
        id: 1,
        transactionName: "GTR 5",
        categoryId: 5,
        shopName: "Gadget & Gear",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 160,
        type: "Expense",
        icon: <ShoppingBagIcon />, // Menambahkan ikon
    },
    {
        id: 2,
        transactionName: "Polo Shirt",
        categoryId: 5,
        shopName: "XL Fashions",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 20,
        type: "Expense",
        icon: <DryCleaningIcon />, // Menambahkan ikon
    },
    {
        id: 3,
        transactionName: "Biriyani",
        categoryId: 2,
        shopName: "Hajir Biriyani",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 12,
        type: "Expense",
        icon: <FastfoodIcon />, // Menambahkan ikon
    },
    {
        id: 4,
        transactionName: "Movie Ticket",
        categoryId: 4,
        shopName: "Inox",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 15,
        type: "Expense",
        icon: <LocalMoviesIcon />, // Menambahkan ikon
    },
    {
        id: 5,
        transactionName: "Taxi Fare",
        categoryId: 3,
        shopName: "Uber",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 10,
        type: "Expense",
        icon: <LocalTaxiIcon />, // Menambahkan ikon
    },
    {
        id: 6,
        transactionName: "Pizza",
        categoryId: 2,
        shopName: "Pizza Hut",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 20,
        type: "Expense",
        icon: <LocalPizzaIcon />, // Menambahkan ikon
    },
    {
        id: 7,
        transactionName: "Keyboard",
        categoryId: 5,
        shopName: "Gadget & Gear",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 30,
        type: "Expense",
        icon: <KeyboardIcon />, // Menambahkan ikon
    },
    {
        id: 8,
        transactionName: "Project Fee",
        categoryId: 6,
        shopName: "Landing Page",
        date: "2023-05-17",
        paymentMethod: "Credit Card",
        amount: 100,
        type: "Revenue",
        icon: <EqualizerIcon />, // Menambahkan ikon
    },
];

export default transactions;
