interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="text-red-500 text-sm mb-4">{message}</div>
);

export default ErrorMessage;
