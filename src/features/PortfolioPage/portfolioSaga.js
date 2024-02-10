import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './porfolioSlice'
import { getRepositories } from '../../utils/getGithubRepositories'
import { processGitHubData } from '../../utils/processApiData';

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(600); //delay to demo the loading state
        const rawData = yield call(getRepositories, username);
        const repositories = yield call(processGitHubData, rawData);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* watchFetchRepositories() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}