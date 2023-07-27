import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ert_list = createAsyncThunk(
  "eRTS/api_v1_ert_list",
  async payload => {
    const response = await apiService.api_v1_ert_list(payload)
    return response.data
  }
)
export const api_v1_ert_create = createAsyncThunk(
  "eRTS/api_v1_ert_create",
  async payload => {
    const response = await apiService.api_v1_ert_create(payload)
    return response.data
  }
)
export const api_v1_ert_retrieve = createAsyncThunk(
  "eRTS/api_v1_ert_retrieve",
  async payload => {
    const response = await apiService.api_v1_ert_retrieve(payload)
    return response.data
  }
)
export const api_v1_ert_update = createAsyncThunk(
  "eRTS/api_v1_ert_update",
  async payload => {
    const response = await apiService.api_v1_ert_update(payload)
    return response.data
  }
)
export const api_v1_ert_partial_update = createAsyncThunk(
  "eRTS/api_v1_ert_partial_update",
  async payload => {
    const response = await apiService.api_v1_ert_partial_update(payload)
    return response.data
  }
)
export const api_v1_ert_destroy = createAsyncThunk(
  "eRTS/api_v1_ert_destroy",
  async payload => {
    const response = await apiService.api_v1_ert_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const eRTSSlice = createSlice({
  name: "eRTS",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_ert_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ert_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ert_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_ert_list,
  api_v1_ert_create,
  api_v1_ert_retrieve,
  api_v1_ert_update,
  api_v1_ert_partial_update,
  api_v1_ert_destroy,
  slice: eRTSSlice
}
