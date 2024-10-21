const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.breadcrumb': {
      '@apply flex items-center gap-2 shrink-0 mb-4': {},
      '.breadcrumb-item': {
        '@apply last:opacity-75': {},
        '&:not(:last-child)': {
          "@apply relative ltr:before:content-['\\ea61'] rtl:before:content-['\\ea60'] before:font-['tabler-icons'] before:absolute ltr:before:right-[-20px] ltr:mr-[1.35rem] rtl:before:left-[-20px] rtl:ml-[1.35rem]": {},
          a: {
            '@apply hover:text-primary-500 ease-in-out duration-200': {}
          }
        }
      }
    }
  });
});
