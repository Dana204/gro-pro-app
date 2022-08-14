import React, { Fragment } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import MenuItem from '../components/Menu/MenuItem'
import Card from '../components/UI/Card';
// import MenuList from '../components/Menu/MenuList'
import { useSelector } from 'react-redux';

const Favourites = () => {
  const favouriteItems = useSelector((state) => state.fav.favItems);
  // const favListIsEmpty = favouriteItems.length === 0;

  return (
    <Fragment>
      {/* <PageTitle /> */}
      {/* { favListIsEmpty && <p>No favourites selected</p> }
      { !favListIsEmpty && <MenuList menu={favouriteItems} /> } */}
      {/* <MenuList menu={favItems} /> */}
      {/* {favouriteItems.map((favouriteItem) => (
        <p>{favouriteItem.name}</p>
      ))} */}

      {/* <MenuList menu={favouriteItems} /> */}
      {favouriteItems.map((item) => (
          <Card>
            <p>{item.name}</p>
            <img src={item.src} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </Card>
        ))}
    </Fragment>
  )
}

export default Favourites