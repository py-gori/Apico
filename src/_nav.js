export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      name: 'API Elements',
      icon: 'Book',
      children: [
        {
          name: 'Train',
          url: '/elements/train',
        },
        {
          name: 'Weather',
          url: '/elements/weather',
        },
      ],
    },
    {
      name: 'Pages',
      icon: 'File',
      children: [
        {
          name: 'Blank',
          url: '/pages/blank',
        },
        {
          name: 'Sub Navigation',
          url: '/pages/subnav',
        },
        {
          name: '404',
          url: '/pages/404',
        },
      ],
    },
    {
      name: 'Apps',
      icon: 'Cloud',
      children: [
        {
          name: 'Analytics',
          url: '/apps/analytics',
        },
        {
          name: 'Invoice',
          url: '/apps/invoice',
        },
        {
          name: 'Activity Feed',
          url: '/apps/feed',
        },
        {
          name: 'CMS',
          url: '/apps/cms',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'Package',
      badge: {
        text: 'NEW',
      },
    },
  ],
  bottom: [
    {
      name: 'Get Vibe',
      url: 'https://github.com/NiceDash/Vibe',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    },
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },
  ],
};
