export default () => {
  window.$('.datepicker').datepicker({
    format: 'dd/mm/yyyy'
  })

  window.$.material.init()

  window.$('[data-toggle="tooltip"]').tooltip()
  window.$('[data-toggle="popover"]').popover()
}
