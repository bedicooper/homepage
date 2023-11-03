import styled from "styled-components";

export const GalleryContainer = styled.div`
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export const GalleryItem = styled.div`
    flex: 1 1 360px;
    text-align: center;
`;

export const GalleryImage = styled.img`
    max-width: 100%;
`;