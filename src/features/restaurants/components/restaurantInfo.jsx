import React from "react";
import { Address, Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from "./restaurantInfo.styles";
import { Text } from "../../../components/typography/text";
import { Spacer } from "../../../components/spacer";
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Favourite } from "../../../components/favourites/favourite.component";


export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;


  return (
    <RestaurantCard elevation={3}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {Array(Math.floor(rating)).fill().map((_, i) => (
              <SvgXml key={`star_${placeId}--${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error" >
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

