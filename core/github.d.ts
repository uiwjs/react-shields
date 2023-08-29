declare module '@uiw/react-shields/github' {
  import { ContainerProps } from '@uiw/react-shields/esm/common/Container';
  const Github: {
    (props: ContainerProps): import('react/jsx-runtime').JSX.Element;
    Issues: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Issues').IssuesProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Size: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Size').SizeProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Downloads: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Downloads').DownloadsProps & import('react').RefAttributes<HTMLImageElement>
    >;
    License: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/License').LicenseProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Activity: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Activity').ActivityProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Analysis: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Analysis').AnalysisProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Version: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Version').VersionProps & import('react').RefAttributes<HTMLImageElement>
    >;
    Social: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/github/Social').SocialProps & import('react').RefAttributes<HTMLImageElement>
    >;
    displayName: string;
  };
  export default Github;
}
