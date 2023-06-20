import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utils/SafeArea";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Spacer } from "../../../components/spacer";
import { RestaurantInfoCard } from "../../restaurants/components/restaurantInfo";
import { Text } from "../../../components/typography/text";
import { FadeInView } from "../../../components/animations/FadeAnimations";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("RestaurantDetail", {
                                restaurant: item,
                            })
                        }
                    >
                        <Spacer position="bottom" size="large">
                            <FadeInView>
                                <RestaurantInfoCard restaurant={item} />
                            </FadeInView>
                        </Spacer>
                    </TouchableOpacity>

                }
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    );
};