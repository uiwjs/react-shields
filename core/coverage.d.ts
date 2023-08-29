declare module '@uiw/react-shields/coverage' {
  import { ContainerProps } from '@uiw/react-shields/esm/common/Container';

  const Coverage: {
    (props: ContainerProps): import('react/jsx-runtime').JSX.Element;
    Coverages: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/coverages/Coverages').CoveragesProps &
        import('react').RefAttributes<HTMLImageElement>
    >;
    Codacy: import('react').ForwardRefExoticComponent<
      import('@uiw/react-shields/esm/coverages/Codacy').CodacyProps & import('react').RefAttributes<HTMLImageElement>
    >;
    displayName: string;
  };
  export default Coverage;
}
