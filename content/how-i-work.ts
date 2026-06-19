export interface WorkStep {
  id: string
  label: string
  title: string
  subtitle: string
  description: string
}

export const WORK_STEPS: WorkStep[] = [
  {
    id: 'step-01',
    label: '[STEP_01]',
    title: '비효율 포착',
    subtitle: 'Problem Discovery',
    description:
      '겪어보지 않으면 문제처럼 보이지 않는 것들이 있습니다. 굴착기 배차 현장에서 쉬는 날도 오전 5시까지 대기했던 것처럼, 시스템의 병목은 직접 당해본 사람이 가장 정확하게 정의할 수 있습니다.',
  },
  {
    id: 'step-02',
    label: '[STEP_02]',
    title: '구조적 설계',
    subtitle: 'System Architecture',
    description:
      '코드를 먼저 치면 나중에 다 뜯어야 한다는 걸 직접 겪었습니다. 컴포넌트 경계, 데이터 흐름, 서버·클라이언트 역할 분리를 미리 그려두면 구현 중에 방향을 잃지 않습니다.',
  },
  {
    id: 'step-03',
    label: '[STEP_03]',
    title: '도구의 통제 및 가속',
    subtitle: 'Tool Leverage',
    description:
      '도구는 판단을 대신하지 않습니다. 각 도구에 역할을 정해두고 그 경계 밖으로 넘어오지 않도록 통제할 때, 결과물의 속도와 신뢰도가 동시에 올라갑니다.',
  },
]
