import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: "1", name: "Widget 1", text: "Random text for Widget 1" },
        { id: "2", name: "Widget 2", text: "Random text for Widget 2" }
      ]
    },
    {
      id: "2",
      name: "Security Overview",
      widgets: [
        { id: "3", name: "Widget 3", text: "Random text for Widget 3" }
      ]
    }
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    addCategory: (state, action) => {
      const { category } = action.payload;
      state.categories.push(category);
    },
    toggleWidgetSelection: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        const widget = category.widgets.find(widget => widget.id === widgetId);
        if (widget) {
          widget.selected = !widget.selected;
        }
      }
    },
  }
});

export const { addWidget, removeWidget, addCategory, toggleWidgetSelection} = dashboardSlice.actions;
export default dashboardSlice.reducer;
