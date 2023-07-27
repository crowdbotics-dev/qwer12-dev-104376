import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_tyui_list = createAsyncThunk(
  "tYUIS/api_v1_tyui_list",
  async payload => {
    const response = await apiService.api_v1_tyui_list(payload)
    return response.data
  }
)
export const api_v1_tyui_create = createAsyncThunk(
  "tYUIS/api_v1_tyui_create",
  async payload => {
    const response = await apiService.api_v1_tyui_create(payload)
    return response.data
  }
)
export const api_v1_tyui_retrieve = createAsyncThunk(
  "tYUIS/api_v1_tyui_retrieve",
  async payload => {
    const response = await apiService.api_v1_tyui_retrieve(payload)
    return response.data
  }
)
export const api_v1_tyui_update = createAsyncThunk(
  "tYUIS/api_v1_tyui_update",
  async payload => {
    const response = await apiService.api_v1_tyui_update(payload)
    return response.data
  }
)
export const api_v1_tyui_partial_update = createAsyncThunk(
  "tYUIS/api_v1_tyui_partial_update",
  async payload => {
    const response = await apiService.api_v1_tyui_partial_update(payload)
    return response.data
  }
)
export const api_v1_tyui_destroy = createAsyncThunk(
  "tYUIS/api_v1_tyui_destroy",
  async payload => {
    const response = await apiService.api_v1_tyui_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tYUISSlice = createSlice({
  name: "tYUIS",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_tyui_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tyui_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tyui_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_tyui_list,
  api_v1_tyui_create,
  api_v1_tyui_retrieve,
  api_v1_tyui_update,
  api_v1_tyui_partial_update,
  api_v1_tyui_destroy,
  slice: tYUISSlice
}
