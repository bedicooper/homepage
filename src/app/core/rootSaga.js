import { all } from "redux-saga/effects";
import { watchFetchRepositories } from '../../features/PortfolioPage/portfolioSaga';

export default function* rootSaga() {
    yield all([
        watchFetchRepositories(),
    ]);
};