import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const userId = useParams().userId;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    const fetchUserPlaces = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        setLoadedPlaces(data.places);
        console.log(data.places);
      } catch (error) {}
    };
    fetchUserPlaces();
  }, [sendRequest, userId]);
  const placeDeleteHandler = (placeId) => {
    setLoadedPlaces((pervPlaces) =>
      pervPlaces.filter((place) => place.id !== placeId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedPlaces && (
        <PlaceList places={loadedPlaces} onDelete={placeDeleteHandler} />
      )}
    </>
  );
};

export default UserPlaces;
