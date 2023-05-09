import React from 'react'
import Cursor from '../Cursor';


interface Props {
    size: number
 
}


const Mouthsvg = ({size}: Props) => {
  return (
    <div
      className={`w-full h-full fixed flex justify-center items-center z-[1]`}
    >
      <Cursor scrolled={size}/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4810 4810"
        fill="none"
        className={`absolute  ${
          size < 1350 ? "z-50 opacity-100" : "z-[-1] opacity-0"
        }`}
        style={{ height: `${4 * size + 100}`, width: `${4 * size + 100}` }}
      >
        <path
          d="M4089.2 2399.21C4089.3 2386.31 4089.6 2369.61 4088.9 2360.71C4088.2 2351.91 4090.2 2342.21 4087.6 2333.51C4085.8 2255.51 4080.2 2174.31 4072 2091.91C4065.2 2021.11 4055.2 1949.21 4044.4 1884.31C4038.6 1851.21 4033.1 1819.51 4027.1 1788.91C4009.1 1703.21 3986.2 1618.71 3958.6 1535.61C3948.8 1504.21 3938.7 1474.31 3928.2 1445.91C3917.7 1417.51 3906.9 1390.21 3895.8 1364.01C3891.1 1354.41 3885.2 1343.81 3882 1332.81C3881.2 1330.81 3880.6 1328.81 3880.2 1326.71C3874.3 1314.61 3866.5 1302.61 3862.9 1290.31C3845.8 1254.41 3827.4 1220.71 3809.6 1190.61C3803.3 1180.51 3797.5 1170.31 3791.4 1160.71L3773.5 1133.51C3768.1 1124.61 3761.6 1115.51 3755.9 1107.21C3742.7 1088.21 3729.5 1070.61 3716.7 1054.31C3711 1047.91 3706.2 1041.21 3701.1 1035.01C3698.9 1032.31 3695.9 1031.81 3694.6 1027.41L3684.7 1016.51C3659.8 987.413 3633 959.913 3604.6 934.213C3601.4 931.313 3596.4 929.013 3595.4 925.513L3575.5 909.413C3569.1 903.713 3562.3 898.513 3556.1 893.613L3551.9 890.513L3532 876.313C3519.2 866.713 3507.4 858.713 3495.8 851.613L3483.1 843.913L3464.4 833.613L3457.2 830.013C3440.8 821.413 3423.8 813.913 3406.4 807.713C3406.4 807.713 2950 616.913 2532.9 914.113C2452.3 969.013 2383.5 1015.71 2328.6 1052.61C2315.5 1061.61 2301.9 1070.41 2288.4 1078.11L2278.5 1083.41L2266.6 1089.71L2238 1104.21C2233.2 1106.11 2228.2 1107.51 2223.1 1108.61C2202 1118.11 2180.4 1126.31 2158.4 1133.21L2123.3 1143.41C2115.4 1145.71 2107.5 1148.01 2099.2 1150.41C2049.9 1160.81 1999.6 1165.21 1949.3 1163.61C1886.3 1161.51 1810.6 1158.31 1720.5 1151.21C1705.9 1150.21 1691.8 1149.11 1677.5 1149.01L1656.4 1148.51C1633.1 1148.21 1609.9 1149.11 1586.7 1151.21C1577.8 1155.31 1570 1161.31 1563.8 1168.81C1538.3 1171.01 1513 1174.11 1487.6 1178.61L1469.6 1183.81C1437.7 1189.91 1406.2 1197.91 1375.2 1208.01L1365.1 1210.91L1339.2 1218.41L1320.3 1223.91C1291.6 1235.11 1263.6 1248.11 1236.4 1262.61L1216.7 1273.61L1201.6 1282.31L1180.6 1295.11C1178.3 1295.31 1176.1 1296.01 1174 1297.01L1155.9 1308.51L1131.1 1326.21L1106.7 1343.81C1094.2 1353.21 1080.3 1364.31 1071.5 1371.71L1045.8 1394.41L1028.1 1410.51C1027.2 1410.81 1025 1411.41 1025 1411.41L998.804 1437.61L976.304 1461.81L963.104 1477.11L931.004 1517.41L925.304 1525.71L922.204 1526.61C922.204 1526.61 915.804 1534.21 905.404 1549.11L898.804 1559.11C892.304 1569.61 884.404 1583.31 875.504 1600.21L866.704 1617.51C864.004 1623.01 861.204 1629.61 857.804 1635.81C828.504 1702.41 807.604 1772.51 795.704 1844.31C794.204 1852.31 793.504 1861.11 791.704 1868.31C790.004 1875.51 788.704 1885.81 788.104 1893.61C787.504 1901.41 786.404 1908.91 785.504 1917.21C785.904 1918.01 786.204 1918.91 786.304 1919.81C784.304 1937.51 783.204 1956.41 782.004 1975.31C781.804 1984.41 780.804 1992.31 780.804 2002.31C780.904 2012.31 781.004 2020.81 780.804 2029.91C780.604 2039.01 781.104 2048.91 781.004 2058.41C780.904 2067.91 781.404 2077.81 781.504 2087.81C783.104 2117.81 785.004 2148.71 788.204 2181.11L791.904 2213.41C796.604 2249.21 802.104 2286.11 809.504 2324.41C813.104 2343.31 816.004 2363.01 821.704 2382.71C824.404 2391.91 827.804 2403.81 830.004 2411.21C831.804 2419.21 834.104 2427.11 836.904 2434.91L854.904 2496.81C903.404 2658.51 966.804 2815.31 1044.2 2965.31C1057.3 2992.41 1071.2 3018.81 1084.8 3044.41C1089.4 3048.81 1090.8 3053.61 1092.2 3058.41C1108.7 3088.81 1124.1 3119.11 1142.1 3148.11C1160.1 3177.11 1176.6 3206.11 1194.3 3234.31C1201.8 3246.91 1206.1 3253.71 1217.6 3271.81C1229 3289.91 1240.9 3307.81 1252.7 3325.41C1259.7 3336.21 1267.1 3346.91 1274.3 3357.21L1293.3 3385.01C1301.1 3395.61 1310.4 3409.51 1315.7 3416.11C1320.9 3422.71 1322.5 3424.61 1330.4 3435.61C1338.4 3446.61 1346.9 3457.91 1355.2 3468.41C1358.2 3470.41 1358.7 3472.11 1359.4 3474.81C1368.8 3485.91 1377.8 3497.11 1386.8 3508.21C1406.4 3533.01 1425.6 3556.41 1445.1 3579.31C1454.6 3590.81 1464.5 3601.71 1474.5 3613.11C1498.2 3640.51 1523.6 3667.31 1548.7 3692.91L1575.7 3720.31C1588.1 3733.41 1600.2 3745.51 1612.6 3757.21C1634.1 3777.11 1655.6 3797.01 1677.2 3815.51C1689.9 3826.51 1702.4 3836.71 1715 3847.31L1737.8 3864.91C1758.8 3879.71 1778.4 3895.01 1798.3 3909.21C2175.1 4186.51 2600.4 4273.51 3030.4 4148.21L3079.5 4133.91C3089.2 4131.11 3096.2 4129.01 3108 4125.61L3141 4113.11L3173.9 4100.21L3207 4086.31C3237.3 4072.71 3267.2 4057.81 3296.6 4042.61L3329.4 4024.51C3349.1 4013.51 3368 4001.81 3387 3990.11L3416.4 3970.11C3433.6 3958.91 3450.1 3946.91 3466.5 3934.61C3506.6 3904.71 3544.9 3872.41 3581.1 3837.91C3605 3817.11 3627.9 3794.31 3649.5 3770.41L3671.5 3746.41L3693.8 3719.91L3715.5 3693.11L3734.5 3668.51C3751.4 3646.41 3767.2 3623.81 3782.2 3600.31C3789.2 3591.61 3795.3 3579.81 3802 3570.31L3819.9 3540.31C3854.3 3484.61 3885.1 3426.81 3912.3 3367.21L3922.7 3342.31C3933.2 3316.41 3944.4 3289.31 3953.8 3262.81C3957.4 3254.61 3960.5 3246.21 3963.1 3237.71C3986.4 3172.11 4006.2 3105.31 4022.4 3037.61C4026.9 3018.71 4031.4 2999.81 4035.4 2981.01L4042.7 2945.61C4046.6 2929.71 4049.8 2912.61 4052.7 2895.11L4057.3 2865.21C4059.1 2851.81 4061.4 2838.31 4062.9 2824.01C4064.5 2809.71 4065.5 2797.11 4068.3 2782.01C4071 2766.91 4073.4 2743.91 4074.8 2732.51C4076.3 2721.11 4077.1 2709.51 4078.1 2698.21C4081.3 2664.91 4083.4 2631.41 4085.4 2597.51C4085.8 2572.61 4087.7 2546.41 4088.3 2520.91C4088.5 2503.71 4088.5 2488.91 4088.7 2473.21C4089.3 2446.81 4089.9 2424.31 4089.2 2399.21ZM2641.7 2819.21C2369.4 2898.51 2084.5 2742.11 2005.2 2469.81C1925.9 2197.51 2082.3 1912.51 2354.6 1833.31C2626.9 1754.01 2911.8 1910.41 2991.1 2182.71C3070.4 2454.91 2914 2739.91 2641.7 2819.21Z"
          fill="#FF5986"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.33"
          d="M3985.5 2373.41C3985.6 2361.31 3985.9 2345.61 3985.3 2337.31C3984.7 2329.01 3986.5 2320.01 3984.1 2311.81C3982.4 2238.71 3977.2 2162.61 3969.5 2085.41C3963.1 2019.01 3953.7 1951.71 3943.6 1890.81C3938.1 1859.81 3933 1830.11 3927.4 1801.41C3910.5 1721.11 3889 1641.81 3863.2 1564.01C3854 1534.61 3844.5 1506.51 3834.7 1479.91C3824.9 1453.31 3814.7 1427.71 3804.3 1403.11C3799.9 1394.11 3794.3 1384.21 3791.3 1373.91C3790.5 1372.11 3790 1370.11 3789.6 1368.11C3784.1 1356.81 3776.8 1345.51 3773.4 1334.01C3757.3 1300.31 3740.1 1268.71 3723.4 1240.61C3717.5 1231.21 3712.1 1221.61 3706.3 1212.61L3689.5 1187.11C3684.4 1178.81 3678.3 1170.31 3673 1162.51C3660.7 1144.71 3648.3 1128.21 3636.3 1113.01C3631 1107.01 3626.5 1100.71 3621.7 1095.01C3619.6 1092.51 3616.8 1092.01 3615.6 1087.91L3606.4 1077.71C3583 1050.41 3557.9 1024.61 3531.3 1000.51C3528.3 997.812 3523.6 995.612 3522.7 992.312L3504 977.212C3498 971.812 3491.6 967.012 3485.9 962.412L3482 959.512L3463.4 946.212C3451.4 937.212 3440.3 929.712 3429.5 923.112L3417.6 915.912L3400.1 906.312L3393.3 902.912C3377.9 894.812 3362 887.812 3345.7 882.012C3345.7 882.012 2917.9 703.212 2527 981.712C2451.4 1033.21 2387 1076.91 2335.5 1111.51C2323.3 1120.01 2310.5 1128.21 2297.9 1135.41L2288.6 1140.31L2277.4 1146.21L2250.6 1159.81C2246.1 1161.61 2241.4 1162.91 2236.6 1163.91C2216.8 1172.81 2196.6 1180.41 2175.9 1186.91L2143 1196.51C2135.6 1198.71 2128.2 1200.81 2120.4 1203.11C2074.2 1212.91 2027.1 1217.01 1979.9 1215.51C1920.9 1213.51 1849.9 1210.51 1765.5 1203.91C1751.8 1203.01 1738.6 1201.91 1725.2 1201.81L1705.4 1201.31C1683.6 1201.11 1661.8 1201.91 1640.1 1203.81C1631.8 1207.61 1624.4 1213.21 1618.6 1220.31C1594.7 1222.41 1571 1225.21 1547.2 1229.51L1530.3 1234.41C1500.4 1240.11 1470.8 1247.61 1441.9 1257.01L1432.4 1259.81L1408.1 1266.91L1390.4 1272.11C1363.5 1282.61 1337.2 1294.81 1311.7 1308.41L1293.3 1318.71L1279.2 1326.81L1259.5 1338.81C1257.3 1339.01 1255.3 1339.61 1253.3 1340.61L1236.4 1351.31L1213.1 1367.91L1190.2 1384.41C1178.5 1393.21 1165.5 1403.61 1157.2 1410.51L1133.1 1431.81L1116.5 1446.91C1115.7 1447.11 1113.6 1447.71 1113.6 1447.71L1089.1 1472.21L1068 1494.91L1055.7 1509.21L1025.6 1547.01L1020.3 1554.81L1017.4 1555.61C1017.4 1555.61 1011.4 1562.71 1001.7 1576.71L995.505 1586.11C989.405 1595.91 982.005 1608.81 973.705 1624.61L965.505 1640.81C963.005 1646.01 960.305 1652.11 957.105 1658.01C929.605 1720.51 910.105 1786.11 898.905 1853.41C897.505 1860.91 896.805 1869.21 895.205 1875.91C893.605 1882.61 892.405 1892.31 891.905 1899.61C891.305 1906.91 890.305 1913.91 889.405 1921.71C889.805 1922.51 890.105 1923.31 890.105 1924.21C888.205 1940.81 887.205 1958.51 886.105 1976.21C885.905 1984.71 884.905 1992.11 885.005 2001.51C885.005 2010.91 885.105 2018.91 885.005 2027.41C884.805 2035.91 885.305 2045.21 885.205 2054.11C885.105 2063.01 885.605 2072.31 885.605 2081.61C887.105 2109.71 888.805 2138.71 891.905 2169.01L895.405 2199.21C899.805 2232.71 905.005 2267.41 911.905 2303.31C915.305 2321.11 918.005 2339.51 923.405 2358.01C925.905 2366.61 929.205 2377.71 931.205 2384.71C932.905 2392.21 935.105 2399.61 937.705 2406.91L954.605 2464.91C1000.1 2616.41 1059.5 2763.41 1132 2904.01C1144.3 2929.41 1157.3 2954.21 1170.1 2978.11C1174.4 2982.21 1175.7 2986.71 1177.1 2991.21C1192.5 3019.71 1207 3048.11 1223.9 3075.31C1240.8 3102.51 1256.2 3129.71 1272.9 3156.11C1279.9 3167.91 1284 3174.31 1294.7 3191.21C1305.4 3208.11 1316.6 3225.01 1327.6 3241.41C1334.1 3251.61 1341.1 3261.61 1347.9 3271.21L1365.7 3297.21C1373 3307.11 1381.8 3320.21 1386.7 3326.31C1391.6 3332.41 1393 3334.31 1400.5 3344.61C1408 3354.91 1416 3365.51 1423.7 3375.31C1426.5 3377.21 1427 3378.81 1427.7 3381.31C1436.5 3391.71 1444.9 3402.21 1453.3 3412.61C1471.7 3435.81 1489.7 3457.81 1508 3479.21C1516.9 3490.01 1526.2 3500.21 1535.5 3510.91C1557.7 3536.61 1581.5 3561.71 1605 3585.71L1630.3 3611.31C1641.9 3623.51 1653.2 3635.01 1664.9 3645.81C1685.1 3664.51 1705.2 3683.11 1725.4 3700.41C1737.3 3710.81 1749 3720.31 1760.8 3730.21L1782.1 3746.71C1801.8 3760.61 1820.2 3774.91 1838.8 3788.21C2192 4048.11 2590.6 4129.71 2993.6 4012.21L3039.7 3998.81C3048.8 3996.21 3055.3 3994.31 3066.4 3991.01L3097.3 3979.31L3128.1 3967.21L3159.1 3954.21C3187.5 3941.51 3215.6 3927.51 3243.1 3913.21L3273.8 3896.21C3292.2 3885.91 3310 3875.01 3327.8 3864.01L3355.4 3845.31C3371.5 3834.81 3387 3823.61 3402.4 3812.01C3440 3783.91 3475.9 3753.71 3509.8 3721.41C3532.2 3701.91 3553.7 3680.51 3573.9 3658.11L3594.6 3635.61L3615.5 3610.81L3635.9 3585.71L3653.7 3562.71C3669.5 3542.01 3684.3 3520.81 3698.4 3498.81C3705 3490.71 3710.7 3479.61 3717 3470.61L3733.8 3442.51C3766 3390.31 3794.9 3336.11 3820.4 3280.31L3830.1 3256.91C3840 3232.61 3850.4 3207.31 3859.3 3182.41C3862.7 3174.71 3865.6 3166.91 3868.1 3158.91C3889.9 3097.41 3908.5 3034.81 3923.7 2971.41C3927.9 2953.71 3932.1 2935.91 3935.9 2918.31L3942.7 2885.11C3946.4 2870.21 3949.3 2854.21 3952.1 2837.71L3956.4 2809.71C3958.1 2797.21 3960.2 2784.51 3961.7 2771.11C3963.2 2757.71 3964.2 2745.91 3966.7 2731.71C3969.3 2717.61 3971.5 2696.01 3972.8 2685.31C3974.2 2674.61 3975 2663.71 3975.9 2653.21C3978.9 2622.01 3980.9 2590.61 3982.8 2558.81C3983.2 2535.51 3984.9 2510.91 3985.6 2487.01C3985.8 2470.91 3985.8 2457.11 3986 2442.31C3985.5 2418.01 3986.1 2396.91 3985.5 2373.41ZM2639.7 2832.71C2363.7 2913.11 2074.8 2754.51 1994.4 2478.51C1914 2202.51 2072.6 1913.61 2348.6 1833.21C2624.6 1752.81 2913.5 1911.41 2993.9 2187.41C3074.3 2463.51 2915.7 2752.41 2639.7 2832.71Z"
          fill="#1D1E5F"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2063.7 369.212L2063.8 369.112C2205.6 258.012 2374.9 201.612 2502.6 172.412C2567.4 157.612 2624 149.212 2664.7 144.612C2685.1 142.312 2701.6 140.812 2713.3 140.012C2719.2 139.612 2723.8 139.312 2727.2 139.112C2728.9 139.012 2730.2 138.912 2731.3 138.912C2731.8 138.912 2732.2 138.912 2732.5 138.812C2732.6 138.812 2732.7 138.812 2732.8 138.812L2063.7 369.212ZM2063.7 369.212C2038.6 388.912 2011.5 406.012 1982.9 420.012L1982.8 420.112C1957.6 432.512 1930.5 440.412 1902.6 443.512C1901.2 443.712 1899.8 443.812 1898.4 444.012C1869.9 448.112 1841.1 448.412 1812.5 444.712C1639.4 417.112 1460.8 460.312 1333.9 504.012C1268.6 526.512 1213.2 550.612 1173.9 569.012C1154.2 578.312 1138.5 586.212 1127.4 592.012C1121.9 594.912 1117.5 597.212 1114.4 598.912C1112.8 599.712 1111.6 600.412 1110.7 600.912C1110.2 601.212 1109.9 601.412 1109.6 601.512C1109.5 601.612 1109.3 601.712 1109.2 601.712L1109.1 601.812H1109C1109 601.812 1108.9 601.812 1168.7 708.312L1109 601.812C1107.3 602.712 1105.6 603.712 1104 604.812C723.304 842.712 442.104 1210.61 312.504 1640.11C312.404 1640.41 312.304 1640.71 312.204 1641.01C207.704 1996.81 290.404 2404.81 426.704 2762.11C564.304 3122.81 764.504 3452.51 921.904 3662.61C1225.2 4067.51 1950.7 4941.31 3152.7 4591.21C4354.7 4241.11 4497.2 3114.91 4536 2610.01C4556.1 2347.71 4547.5 1963.51 4469.9 1586.11C4393 1212.11 4244.3 824.212 3968.4 577.312L2063.7 369.212ZM2063.7 369.212L2733.1 138.712H2733.3C2733.7 138.712 2734.3 138.712 2734.9 138.612C2736.6 138.512 2739 138.412 2741.9 138.412C2747.8 138.212 2756.1 138.112 2766.6 138.012C2787.6 137.912 2817.5 138.412 2854.6 140.312C2928.7 144.312 3032.3 154.412 3152.1 179.212C3390.9 228.612 3700.5 337.512 3968.3 577.412L2063.7 369.212ZM3968.3 577.512C3968.3 577.412 3968.3 577.412 3968.3 577.512L3886.8 668.512L3968.3 577.512Z"
          stroke="white"
          strokeWidth="244.216"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-secondary"
        />
        <path
          d="M3878.1 680.012C3387.9 240.912 2736.6 274.912 2736.6 274.912C2736.6 274.912 2383.6 288.512 2141.7 478.112C2110.1 502.912 2076 524.412 2039.9 542.112C2002.2 560.712 1961.6 572.512 1919.8 577.112C1879.9 582.912 1839.5 583.112 1799.5 577.812C1513.3 531.312 1177.4 719.712 1177.4 719.712C824.304 940.412 563.404 1281.81 443.104 1680.51C257.704 2311.41 727.904 3179.71 1029.4 3582.21C1330.9 3984.71 2004.2 4784.51 3114.7 4461.11C4225.2 4137.61 4363.5 3101.91 4402 2599.91C4440.5 2097.91 4368.7 1118.91 3878.1 680.012ZM3927.3 1832.41C3933 1861.11 3938.5 1890.71 3943.5 1921.81C3953.6 1982.61 3963 2050.01 3969.4 2116.41C3977.2 2193.61 3982.4 2269.71 3984 2342.81C3986.4 2351.01 3984.6 2360.01 3985.2 2368.31C3985.8 2376.61 3985.5 2392.31 3985.4 2404.41C3986 2427.91 3985.5 2449.01 3985.5 2473.51C3985.3 2488.31 3985.3 2502.11 3985.1 2518.21C3984.5 2542.01 3982.7 2566.61 3982.3 2589.91C3980.4 2621.71 3978.4 2653.11 3975.4 2684.31C3974.5 2694.81 3973.6 2705.81 3972.3 2716.41C3970.9 2727.01 3968.8 2748.71 3966.2 2762.81C3963.6 2776.91 3962.6 2788.81 3961.2 2802.21C3959.7 2815.61 3957.6 2828.21 3955.9 2840.81L3951.6 2868.81C3948.8 2885.21 3945.9 2901.31 3942.2 2916.21L3935.4 2949.41C3918.1 3031.91 3895.1 3113.21 3866.6 3192.51C3864 3200.41 3861.4 3208.31 3858.2 3215.91C3849 3240.91 3838.9 3266.11 3828.6 3290.51L3818.9 3313.91C3794 3368.51 3765.6 3421.51 3733.9 3472.51L3717.1 3500.61C3710.8 3509.61 3705.1 3520.61 3698.5 3528.81C3684.4 3550.81 3669.6 3572.01 3653.8 3592.71L3636 3615.71L3615.6 3640.81L3594.7 3665.61L3574 3688.11C3553.8 3710.51 3532.3 3731.91 3509.9 3751.41C3475.9 3783.71 3440 3814.01 3402.5 3842.01C3387.1 3853.61 3371.7 3864.81 3355.5 3875.31L3327.9 3894.01C3310.1 3905.01 3292.4 3916.01 3273.9 3926.21L3243.2 3943.21C3215.8 3957.91 3187.6 3971.41 3159.2 3984.21L3128.2 3997.31L3097.4 4009.41C3087.1 4012.41 3076.4 4015.51 3066.5 4021.11L3039.8 4028.91L2992.9 4042.61C2589.8 4160.01 2191.3 4078.41 1838.1 3818.51C1819.5 3805.21 1801.1 3790.91 1781.4 3777.01L1760.1 3760.51C1748.3 3750.61 1736.6 3741.01 1724.6 3730.71C1692.3 3702.61 1660.5 3673.11 1629.2 3642.01C1620.6 3633.81 1612.3 3625.51 1604.3 3616.21C1580.8 3592.31 1557 3567.11 1534.4 3541.51C1525.1 3530.81 1515.8 3520.61 1506.9 3509.81C1488.6 3488.41 1470.6 3466.41 1452.2 3443.21C1443.8 3432.71 1435.4 3422.21 1426.6 3411.91C1426 3409.81 1425.4 3407.81 1424.8 3405.71C1416.9 3395.51 1408.9 3384.91 1401.5 3374.61L1388.1 3356.21C1380.9 3346.71 1374 3337.11 1367.1 3327.11L1348.8 3301.21C1342 3291.61 1335.5 3281.41 1328.5 3271.41C1317.5 3255.01 1306.3 3238.21 1295.6 3221.21C1284.9 3204.21 1280.8 3197.81 1273.8 3186.11C1257.2 3159.71 1241.8 3133.01 1225.2 3105.21C1208.6 3077.51 1193.4 3049.81 1178 3021.21C1176.7 3016.71 1175.4 3012.11 1171.1 3008.11C1158.3 2984.21 1145.3 2959.41 1133 2934.01C1060.8 2793.21 1001.4 2646.31 955.604 2494.91L938.104 2434.91C935.304 2427.71 933.104 2420.31 931.604 2412.71C929.604 2405.71 926.304 2394.61 923.804 2386.01C918.404 2367.51 915.704 2349.11 912.304 2331.31C905.404 2295.41 900.304 2261.21 895.904 2227.71L892.304 2197.11C889.304 2166.81 887.504 2137.81 886.404 2109.61C885.604 2100.51 885.404 2091.31 885.604 2082.21C883.204 2074.01 885.304 2064.41 885.404 2055.51C885.504 2046.61 885.904 2038.81 885.904 2029.51C885.904 2020.11 886.804 2012.71 886.704 2004.71C887.704 1986.61 888.804 1968.81 890.604 1952.31L889.904 1949.81C890.504 1942.51 891.404 1935.11 892.104 1928.21L895.304 1904.01C896.804 1896.91 897.604 1889.11 899.004 1881.51C910.204 1814.21 929.804 1748.61 957.204 1686.11C959.904 1680.01 962.504 1673.81 965.504 1668.51C968.404 1663.21 971.104 1657.11 974.104 1652.21C982.004 1636.51 989.804 1623.51 995.504 1613.91L1001.7 1604.51C1006.7 1597.21 1012.1 1590.11 1017.8 1583.31L1019.9 1582.71L1021.8 1579.91L1027.1 1572.11L1057.6 1534.21L1069.9 1519.91L1090.6 1497.41L1115.1 1472.91C1115.1 1472.91 1117.2 1472.31 1118.4 1471.91L1134.6 1456.91L1158.7 1435.61C1167 1428.71 1180 1418.31 1191.7 1409.51L1214.6 1393.01L1238.3 1376.31L1255.7 1365.41L1261.5 1363.71L1281.6 1351.61C1286.5 1350.21 1290.6 1345.81 1295.7 1343.51L1315.5 1337.71C1341 1324.11 1367.2 1311.91 1394.2 1301.41L1411.9 1296.21L1436.2 1289.11L1445.7 1286.31C1474.7 1276.91 1504.2 1269.31 1534.1 1263.71L1551 1258.81C1574.8 1254.61 1598.4 1251.71 1622.4 1249.61C1627.2 1243.51 1633.2 1238.51 1639.9 1234.71C1661.6 1232.81 1683.4 1231.91 1705.2 1232.21L1725 1232.71C1738.4 1232.81 1751.7 1233.91 1765.3 1234.81C1849.8 1241.41 1920.7 1244.41 1979.7 1246.41C2026.9 1247.91 2074 1243.81 2120.2 1234.01C2128 1231.71 2135.4 1229.61 2142.8 1227.41L2175.7 1217.81C2196.4 1211.31 2216.6 1203.61 2236.4 1194.81C2241.2 1193.81 2245.8 1192.51 2250.4 1190.71L2277.2 1177.11L2288.4 1171.21L2297.7 1166.31C2310.3 1159.11 2323.1 1150.91 2335.4 1142.41C2386.9 1107.81 2451.3 1064.01 2526.9 1012.51C2917.8 734.012 3345.6 912.812 3345.6 912.812C3361.9 918.712 3377.8 925.712 3393.2 933.712L3400 937.112L3417.5 946.712L3429.4 953.912C3440.3 960.512 3451.4 968.012 3463.3 977.012L3481.9 990.312L3485.9 993.212C3491.7 997.812 3498 1002.61 3504 1008.01C3510 1013.41 3516.2 1017.81 3522.7 1023.11C3529.1 1028.41 3528.3 1028.61 3531.3 1031.31C3558 1055.41 3583.1 1081.21 3606.4 1108.51L3615.6 1118.71C3616.8 1122.81 3619.6 1123.31 3621.7 1125.91C3626.5 1131.61 3631 1137.91 3636.3 1143.91C3648.3 1159.11 3660.7 1175.61 3673 1193.41C3678.4 1201.21 3684.4 1209.71 3689.6 1218.01C3694.7 1226.31 3701.2 1234.71 3706.4 1243.51C3712.2 1252.51 3717.6 1262.11 3723.5 1271.51C3740.2 1299.71 3757.4 1331.21 3773.5 1364.91C3776.8 1376.41 3784.4 1387.11 3789.7 1399.01C3790 1401.01 3790.6 1402.91 3791.4 1404.81C3794.4 1415.11 3800 1425.01 3804.4 1434.01C3815.1 1458.51 3824.8 1484.31 3834.8 1510.81C3844.8 1537.31 3854.4 1565.81 3863.3 1594.91C3887.8 1671.71 3908.1 1749.81 3923.9 1828.91L3927.3 1832.41Z"
          fill="#FF5986"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M711.404 1794.61C729.104 1674.11 773.504 1559.01 841.304 1457.81"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4089.5 3221.41C4065.4 3340.81 4015 3453.41 3941.8 3550.91"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1449.6 1273.11L1545.4 1602.11C1585.6 1751.01 1519.3 1818.91 1401.8 1858.11C1239 1911.81 1173.3 1753.81 1173.3 1753.81L1097.8 1494.71C1106.7 1485.41 1116.3 1475.51 1127.1 1465.21L1143.3 1450.21L1167.4 1428.91C1175.6 1421.61 1188.7 1411.61 1200.4 1402.81C1212.1 1394.01 1230.9 1380.51 1247.4 1369.51L1265.4 1357.61L1271.2 1355.91L1291.4 1344.21C1308.1 1334.01 1325.9 1324.81 1344.6 1315.31L1360.7 1307.91C1366.9 1306.11 1375.2 1301.01 1383.3 1298.21C1391.4 1295.41 1393.2 1295.31 1397.9 1291.71C1402.7 1288.11 1411.1 1287.91 1418 1285.81C1425 1283.81 1433.2 1281.41 1441.9 1278.81L1449.6 1273.11Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1098.3 1496.31L1173.8 1755.41C1211.1 1883.31 1154.6 1972.91 1046.9 2004.31C939.105 2035.71 894.305 2004.11 894.305 2004.11C909.205 1715.11 1027.3 1583.01 1027.3 1583.01C1048.4 1552.21 1072.2 1523.21 1098.3 1496.31Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3671.9 1196.11C3671.9 1196.11 3651 1246.81 3543.2 1278.21C3435.4 1309.61 3340.2 1264.61 3302.9 1136.31L3228.9 882.113C3268.4 890.413 3307.1 902.013 3344.7 916.613C3344.7 916.613 3478.9 954.713 3624.2 1130.11C3639.2 1149.81 3655.1 1172.01 3671.9 1196.11Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3228.9 882.013L3302.7 1135.41C3302.7 1135.41 3330.5 1305.81 3164.2 1346.21C3046.2 1376.11 2952.5 1354.81 2906 1207.21L2811.8 883.913C2948.9 851.913 3091.5 851.313 3228.9 882.013Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1779.7 3707.21L1796.7 3765.61C1733.1 3727.91 1676.8 3688.11 1668.8 3681.91"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2154.5 3717.81L2199.7 3872.91C2203.4 3885.51 2203.4 3898.91 2199.8 3911.51C2196.2 3924.11 2189.1 3935.41 2179.3 3944.21C2169.5 3952.91 2157.4 3958.71 2144.5 3960.91C2131.6 3963.11 2118.3 3961.51 2106.2 3956.41C2010.1 3916.11 1917.2 3868.61 1828.3 3814.21C1808.6 3802.61 1793.9 3784.21 1786.9 3762.51L1779.7 3737.81C1772.7 3702.11 1778.7 3665.11 1796.7 3633.51C1814.7 3601.91 1843.4 3577.81 1877.7 3565.61C1996.3 3516.31 2112.2 3581.61 2154.5 3717.81Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2533.4 3825.01L2580.5 3986.61C2582.2 3991.01 2583.5 3995.51 2584.4 4000.21C2585.5 4011.61 2584.1 4023.01 2580.3 4033.81C2576.5 4044.61 2570.3 4054.31 2562.3 4062.41C2554.3 4070.51 2544.5 4076.71 2533.8 4080.61C2523.1 4084.51 2511.6 4086.01 2500.3 4085.01L2487.2 4083.01C2437.2 4076.61 2371.3 4061.91 2313.3 4048.01C2289.9 4042.41 2268.3 4030.71 2250.9 4014.11C2233.4 3997.51 2220.7 3976.51 2213.9 3953.41L2153.9 3747.61C2151 3737.71 2136.7 3670.11 2280.2 3628.31C2461.4 3577.81 2527 3792.51 2533.4 3825.01Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2899.9 3753.71L2937.3 3882.01C2942.6 3899.61 2944 3918.11 2941.5 3936.21C2939 3954.31 2932.7 3971.81 2922.9 3987.31C2913.1 4002.81 2900.2 4016.11 2884.8 4026.21C2869.5 4036.31 2852.2 4043.01 2834.1 4045.81C2794.1 4052.61 2753.6 4057.11 2713.1 4059.21C2684.5 4060.71 2656.2 4052.51 2632.7 4036.11C2609.2 4019.71 2591.9 3995.81 2583.6 3968.41L2532.9 3794.41C2530.5 3755.71 2542.5 3717.41 2566.6 3687.01C2590.7 3656.61 2625.2 3636.21 2663.4 3629.71C2804 3591.61 2875 3668.21 2899.9 3753.71Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3232.9 3621.21L3287.9 3810.01C3293.8 3831.11 3292.5 3853.51 3284.3 3873.81C3276.1 3894.11 3261.4 3911.11 3242.5 3922.21C3190.2 3953.11 3135.8 3980.41 3079.8 4003.91C3067 4009.21 3053.2 4011.81 3039.4 4011.51C3025.5 4011.11 3011.9 4007.91 2999.4 4001.91C2987 3995.71 2976 3987.11 2967 3976.51C2958.1 3965.91 2951.4 3953.61 2947.5 3940.31L2901.9 3783.61C2876.9 3697.61 2899.3 3593.81 3036.8 3551.11C3174.2 3508.51 3222.6 3601.01 3232.9 3621.21Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3516.6 3352.51L3584.3 3584.91C3589.5 3601.71 3590 3619.61 3585.7 3636.61C3581.4 3653.61 3572.4 3669.11 3559.7 3681.31C3516.3 3723.91 3470.5 3763.91 3422.4 3801.21C3411.7 3809.61 3399.3 3815.61 3386 3818.81C3372.8 3822.01 3359 3822.41 3345.6 3819.91C3332.2 3817.41 3319.5 3812.01 3308.3 3804.21C3297.1 3796.41 3287.7 3786.31 3280.8 3774.61C3276.7 3767.91 3273.6 3760.71 3271.4 3753.21L3233.1 3621.61C3221.5 3591.11 3167 3394.61 3328.2 3326.21C3478.6 3263.61 3516.6 3352.51 3516.6 3352.51Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3847.7 3208.81C3851.6 3224.11 3850.2 3240.21 3843.6 3254.61C3804.2 3340.11 3757.8 3422.31 3705 3500.21C3696.1 3514.41 3683.3 3525.71 3668.1 3532.61C3652.9 3539.61 3636 3541.91 3619.4 3539.41C3602.9 3536.91 3587.4 3529.51 3575 3518.31C3562.6 3507.11 3553.7 3492.51 3549.5 3476.31L3513.6 3352.91C3474.1 3217.21 3537.4 3097.51 3661 3076.21C3691.3 3069.01 3723.2 3071.51 3752 3083.51C3780.8 3095.51 3805.1 3116.21 3821.4 3142.91C3825.6 3149.71 3829.5 3157.01 3833.5 3164.41L3836.5 3174.71L3847.7 3208.81Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3954.7 2844.41C3951.8 2863.51 3948.5 2882.81 3944.9 2901.21C3940 2927.21 3934.9 2952.71 3928.8 2977.71C3927.8 2982.01 3927.3 2986.21 3926.2 2990.11L3923 3003.51L3923.8 3006.41C3922.2 3010.01 3920.6 3015.41 3918.3 3022.71L3913 3036.71C3902.1 3065.31 3884.7 3109.61 3857.9 3164.71L3831.4 3073.81C3803.4 2959.31 3828.9 2912.11 3890.1 2869.31C3909.8 2855.01 3932.9 2846.21 3957.1 2843.51L3954.7 2844.41Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1297.11 2171.11C1219.91 2341.01 1212.21 2534.21 1275.51 2709.71"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2794.3 3414.41C3319.2 3261.51 3620.8 2712.01 3468 2187.11C3315.1 1662.21 2765.6 1360.61 2240.7 1513.41C1715.8 1666.21 1414.2 2215.81 1567.1 2740.71C1719.9 3265.71 2269.4 3567.31 2794.3 3414.41Z"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2171.8 1223.41L2222.2 1396.61C2222.2 1396.61 2293.5 1641.31 1980.9 1732.41C1638.3 1832.21 1558.4 1646.61 1544.7 1604.21L1448.9 1275.21C1550.7 1242.01 1658.1 1229.91 1764.7 1239.41C1849.2 1246.01 1920 1248.61 1979 1250.61C1986.9 1251.11 1994.8 1251.21 2002.7 1250.81C2018.6 1251.01 2034.5 1250.41 2050.4 1249.01C2066 1247.61 2081.5 1245.31 2096.9 1243.11C2122.4 1238.81 2147.7 1232.81 2172.4 1225.11L2171.8 1223.41Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2812.2 883.812L2906.5 1207.51C2918.5 1248.61 2949.8 1449.71 2607.7 1549.71C2293.5 1641.21 2222.2 1396.51 2222.2 1396.51L2171.8 1223.31L2173.9 1222.71C2230.4 1205.31 2284 1179.51 2332.7 1146.11C2384.1 1111.11 2449.2 1069.81 2524.2 1016.31C2610.7 954.112 2708.3 909.212 2811.8 883.912L2812.2 883.812Z"
          fill="white"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3408.3 1556.21C3564.7 1657.91 3675.1 1816.81 3715.7 1999.01"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2771.8 2816.21C2771.8 2816.21 2882.8 2894.81 2882.8 3197.21"
          stroke="#0D052C"
          strokeWidth="74.9232"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Mouthsvg