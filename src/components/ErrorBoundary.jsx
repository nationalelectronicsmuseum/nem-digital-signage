import { Component } from "react";

// Keeps a render error in one part of the UI from blanking the entire unattended
// signage. Wrap the whole app for a top-level safety net, and wrap individual
// slides so a single bad slide fails in isolation while the rest keeps working.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // `fallback` may be omitted (e.g. per-slide) to simply drop the broken
      // subtree without replacing it with anything.
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
