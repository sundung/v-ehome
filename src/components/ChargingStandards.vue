<template>
  <div class='table-standard'>
    <div class="text">收费标准</div>
    <!-- 表格主体 -->
    <div class="table">
      <div class="table-tr">
        <div class="table-th"></div>
        <div class="table-th title-th">空调维修收费项目指导价</div>
        <div class="table-th"></div>
        <div class="table-th"></div>
        <div class="table-th"></div>
      </div>
      <div class="table-tr">
        <div class="table-th tableTh">类型</div>
        <div class="table-th public">维修项目</div>
        <div class="table-th">1p-2p</div>
        <div class="table-th">
          3P-4P
        </div>
        <div class="table-th"> >5P</div>
      </div>
      <div class="table-tr">
        <div class="table-td tableTh">简修</div>
        <div class="table-td public">
          1、调整、更换遥控器、过滤网、封堵墙洞、加长排水管、清洗过滤网；
          2、调整处理：上门检查、空调保养、接线错调整、内机噪音调整、机内异物排除、堵墙洞、贴防震胶；
        </div>
        <div class="table-td">50</div>
        <div class="table-td"></div>
        <div class="table-td"></div>
      </div>
      <div class="table-tr">
        <div class="table-td tableTh">小修</div>
        <div class="table-td public">
          1、更换电脑板、离心风扇、导风板、连机线、连接管、电源线、线控器、接线端子排、柜机内机风扇、室温传感器、控制器（控制板、主板）、显示器、接收器、感温头、电源线、扫风（导风、同步）电机、电加热管限温器（熔断器）、及其他零部件；
        </div>
        <div class="table-td">50</div>
        <div class="table-td"></div>
        <div class="table-td"></div>
      </div>
      <div class="table-tr">
        <div class="table-td tableTh">中修</div>
        <div class="table-td public">
          1、处理系统管理脏堵、内外机连接管（补漏）、找到具体漏点位置及故障原因并修复，充制冷剂；
          2、更换压缩机启动器、风机启动器、电容等其他零部件；
        </div>
        <div class="table-td">50</div>
        <div class="table-td"></div>
        <div class="table-td"></div>
      </div>
      <div class="table-tr">
        <div class="table-td tableTh">大修</div>
        <div class="table-td public">
          1.更换：压缩机、四通阀、冷凝器、截止阀、单向阀、过滤器、电磁阀体毛细管组。
        </div>
        <div class="table-td">50</div>
        <div class="table-td"></div>
        <div class="table-td"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.table-standard {
  margin: 20px 0;
  background-color: #fff;
  height: 1250px;
  padding: 30px;
  // 控制 收费标准 文字
  .text {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  // 表格主题样式开始
  .table {
    height: 790px;
    width: 690px;
    background-color: #fff;
    display: table;
    // 控制整个表格的文字
    font-size: 24px;
    color: #666;
    /* 合并边框 */
    border-collapse: collapse;
    box-sizing: border-box;
    background-color: #fff;
    margin: 15px 0;
    .table-tr {
      // 控制表格第一行
      .title-th {
        height: 74px;
        color: #111;
      }
      // 控制第三列
      & view:nth-child(3) {
        width: 92px;
      }
      // 控制第四列
      & view:nth-child(4) {
        width: 108px;
      }
      // 控制第五列
      & view:nth-child(5) {
        width: 66px;
      }
      /* 此元素会作为一个表格行显示（类似 <tr>） */
      display: table-row;
      height: 92px;
      /* 控制收费表格的 表头 */
      .tableTh {
        width: 70px;
      }
      // 控制维修项目这一列的宽度
      .public {
        width: 356px;
        // 控制维修项目说明的内容
        padding: 20px 10px;
      }
      .table-th {
        /* 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
        display: table-cell;
        // font-weight: bold;
        border: 1px solid #d7d7d7;
        text-align: center;
        vertical-align: middle;
      }
      .table-td {
        display: table-cell;
        border: 1px solid #d7d7d7;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
}
</style>
