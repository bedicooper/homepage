import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./porfolioSlice";
import { StyledSection } from "../styled";
import { SecondHeading } from "../../app/styled";
import { Gallery } from "./Gallery/index";
import githubUsername from "../../utils/githubUsername";

export default () => {
    const dispatch = useDispatch();

    const data = useSelector(selectRepositories);
    const dataStatus = useSelector(selectRepositoriesStatus);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <StyledSection id="work">
            <SecondHeading>projects I recently worked on</SecondHeading>
            <Gallery
                repositories={data}
                status={dataStatus}
            />
        </StyledSection>
    )
};