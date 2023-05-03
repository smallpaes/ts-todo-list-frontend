export default interface ITaskFooter {
  id: string;
  status: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
