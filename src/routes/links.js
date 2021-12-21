import { strings } from '../Localization/languages'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const routeLinks = [
  {
    name: strings.Captins,
    icon: faFlag,
    children: [
      {
        name: strings.CaptinControl,
        path: '/captin-control',
        icon: faFlag,
      },
      {
        name: strings.CaptinEdit,
        path: '/captin-edit',
        icon: faFlag
      },
    ],
  },
  {
    name: strings.Trips,
    icon: faFlag,
    children: [
      {
        name: strings.TripsControl,
        path: 'trips-control',
        icon: faFlag,
      },
      {
        name: strings.TripsLocations,
        path: 'trips-locations',
        icon: faFlag,
      },
    ],
  },
  {
    name: 'trips',
    icon: faFlag,
    children: [
      {
        name: 'first',
        path: '',
        icon: faFlag,
      },
    ],
  },
  {
    name: 'drivers',
    icon: faFlag,
    children: [
      {
        name: 'first',
        path: '',
        icon: faFlag,
      },
    ],
  },
  {
    name: 'passengers',
    icon: faFlag,
    children: [
      {
        name: 'first',
        path: '',
        icon: faFlag,
      },
    ],
  },
  {
    name: 'pages',
    icon: faFlag,
    children: [],
  },
  {
    name: 'offers',
    icon: faFlag,
    children: [],
  },
]

export default routeLinks
