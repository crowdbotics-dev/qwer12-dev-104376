import axios from "axios"
const qwerdevAPI = axios.create({
  baseURL: "https://qwer123-dev-104376.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return qwerdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_ert_list(payload) {
  return qwerdevAPI.get(`/api/v1/ert/`)
}
function api_v1_ert_create(payload) {
  return qwerdevAPI.post(`/api/v1/ert/`, payload)
}
function api_v1_ert_retrieve(payload) {
  return qwerdevAPI.get(`/api/v1/ert/${payload.id}/`)
}
function api_v1_ert_update(payload) {
  return qwerdevAPI.put(`/api/v1/ert/${payload.id}/`, payload)
}
function api_v1_ert_partial_update(payload) {
  return qwerdevAPI.patch(`/api/v1/ert/${payload.id}/`, payload)
}
function api_v1_ert_destroy(payload) {
  return qwerdevAPI.delete(`/api/v1/ert/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return qwerdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return qwerdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_tyui_list(payload) {
  return qwerdevAPI.get(`/api/v1/tyui/`)
}
function api_v1_tyui_create(payload) {
  return qwerdevAPI.post(`/api/v1/tyui/`, payload)
}
function api_v1_tyui_retrieve(payload) {
  return qwerdevAPI.get(`/api/v1/tyui/${payload.id}/`)
}
function api_v1_tyui_update(payload) {
  return qwerdevAPI.put(`/api/v1/tyui/${payload.id}/`, payload)
}
function api_v1_tyui_partial_update(payload) {
  return qwerdevAPI.patch(`/api/v1/tyui/${payload.id}/`, payload)
}
function api_v1_tyui_destroy(payload) {
  return qwerdevAPI.delete(`/api/v1/tyui/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return qwerdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return qwerdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return qwerdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return qwerdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return qwerdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return qwerdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return qwerdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return qwerdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return qwerdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return qwerdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return qwerdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_ert_list,
  api_v1_ert_create,
  api_v1_ert_retrieve,
  api_v1_ert_update,
  api_v1_ert_partial_update,
  api_v1_ert_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_tyui_list,
  api_v1_tyui_create,
  api_v1_tyui_retrieve,
  api_v1_tyui_update,
  api_v1_tyui_partial_update,
  api_v1_tyui_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
