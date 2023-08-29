declare module '@uiw/react-shields/npm' {
  import { ContainerProps } from '@uiw/react-shields/esm/common/Container';
  const Npm: {
    (props: ContainerProps): import('react/jsx-runtime').JSX.Element;
    Version: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/npm/Version').VersionProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Size: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/npm/Size').SizeProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Downloads: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/npm/Downloads').DownloadProps & import('react').RefAttributes<HTMLImageElement>
    >;
    displayName: string;
  };
  export default Npm;
}
