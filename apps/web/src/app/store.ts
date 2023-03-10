import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '@features/filters/filtersSlice';
import todosSlice from '@features/todos/todosSlice';

const store = configureStore({
    reducer: {
        todos: todosSlice,
        filters: filtersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
