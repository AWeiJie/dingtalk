import path from 'path'
import { app, Tray, Menu } from 'electron'

export default dingtalk => () => {
  if (dingtalk.$tray) {
    return
  }
  // 生成托盘图标及其菜单项实例
  const $tray = new Tray(path.join(app.getAppPath(), './icon/24x24.png'))

  // 设置鼠标悬浮时的标题
  $tray.setToolTip('钉钉')
  // 绑定菜单
  $tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '显示窗口',
      click: () => dingtalk.showMainWin()
    },
    {
      label: '屏幕截图',
      click: () => dingtalk.shortcutCapture()
    },
    {
      label: '设置',
      click: () => dingtalk.showSettingWin()
    },
    {
      label: '退出',
      click: () => dingtalk.quit()
    }
  ]))

  $tray.on('click', () => dingtalk.showMainWin())
  $tray.on('double-click', () => dingtalk.showMainWin())
  return $tray
}
