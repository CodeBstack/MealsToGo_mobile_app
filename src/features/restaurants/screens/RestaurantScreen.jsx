import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurantInfo";
import { Spacer } from "../../../components/spacer";
import { SafeArea } from "../../../components/utils/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Search from "../components/Search";
import { useState } from "react";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/FadeAnimations";


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled &&
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      }

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
            <Spacer position='bottom' size='large'>
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
};

export default RestaurantsScreen;