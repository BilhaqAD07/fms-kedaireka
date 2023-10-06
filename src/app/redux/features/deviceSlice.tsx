import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allDevice: [] as any,
  publicDevice: {},
  groupDevice: [] as any,
  deviceInLayout: [] as any,
  deviceDelete: null,
  dropDevice: [] as any
}

export const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    insertAllDevice: (state, action) => {
      state.allDevice.splice(0, state.allDevice.length)
      state.allDevice.push(...action.payload)
    },
    insertPublicDevice: (state, action) => {
      state.publicDevice = action.payload
    },
    insertGroupDevice: (state, action) => {
      state.groupDevice.splice(0, state.groupDevice.length)
      state.groupDevice.push(...action.payload)
    },
    insertDeviceInLayout: (state, action) => {
      state.deviceInLayout.splice(0, state.deviceInLayout.length)
      state.deviceInLayout.push(...action.payload)
    },
    addDeviceInLayout: (state, action) => {
      state.deviceInLayout.push(...action.payload)
    },
    addDeviceDelete: (state, action) => {
      state.deviceDelete = action.payload
    },
    insertDropDevice: (state, action) => {
      state.dropDevice.splice(0, state.deviceInLayout.length)
      state.dropDevice.push(...action.payload)
    },
    addDropDevice: (state, action) => {
      state.dropDevice.push(action.payload)
    }
  }
})

export const {
  insertAllDevice,
  insertPublicDevice,
  insertGroupDevice,
  insertDeviceInLayout,
  addDeviceInLayout,
  addDeviceDelete,
  insertDropDevice,
  addDropDevice
} = deviceSlice.actions

export default deviceSlice.reducer
