import { Component, ReactNode, ErrorInfo } from "react";
import { ErrorPage } from "@pages";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  message?: string;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, message: "Something went wrong" };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError, message } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorPage message={message} />;
    }
    return children;
  }
}
