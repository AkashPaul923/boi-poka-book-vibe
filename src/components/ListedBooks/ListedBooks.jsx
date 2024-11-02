import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData, getStoredWishListData } from "../../utility/AddToDb";
import ListBook from "../ListBook/ListBook";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedWishlistData = getStoredWishListData()
    const storedWishlistDataInt= storedWishlistData.map(id => parseInt(id))
    const WishlistBooksList = allBooks.filter(book => storedWishlistDataInt.includes(book.bookId))
    setWishlistBooks(WishlistBooksList)

    const storedReadData = getStoredData()
    const storedReadDataInt= storedReadData.map(id => parseInt(id))
    const readBooksList = allBooks.filter(book => storedReadDataInt.includes(book.bookId))
    setReadBooks(readBooksList)

  },[])

  return (
    <div>
        <div>
            <p>Books</p>
        </div>
        <Tabs>
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
                {
                    readBooks.map(book => <ListBook book={book} key={book.bookId}></ListBook>)
                }
            </TabPanel>
            <TabPanel>
                {
                    wishlistBooks.map(book => <ListBook book={book} key={book.bookId}></ListBook>)
                }
            </TabPanel>
        </Tabs>
    </div>
  );
};

export default ListedBooks;
