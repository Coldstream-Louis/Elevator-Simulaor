/**
 * Created by dushuyang on 17/4/26.
 */
//"use strict";
var c = 0;                // 选择哪部电梯执行公共任务, 0表示无电梯空闲
var n1 = 1;               // 1号电梯目前的楼层
var n2 = 1;               // 2号电梯目前的楼层
var n3 = 1;               // 3号电梯目前的楼层
var n4 = 1;               // 4号电梯目前的楼层
var n5 = 1;               // 5号电梯目前的楼层
var fl1,fl2,fl3,fl4,fl5;         // 各个电梯当前任务的目标楼层

var current = 0;              // 公共任务等待列表中的任务数

var current1 = 0;             // 1号电梯任务等待列表中的任务数
var current2 = 0;             // 2号电梯任务等待列表中的任务数
var current3 = 0;             // 3号电梯任务等待列表中的任务数
var current4 = 0;             // 4号电梯任务等待列表中的任务数
var current5 = 0;             // 5号电梯任务等待列表中的任务数

var status_1 = "static";      // 1号电梯目前的状态
var status_2 = "static";      // 2号电梯目前的状态
var status_3 = "static";      // 3号电梯目前的状态
var status_4 = "static";      // 4号电梯目前的状态
var status_5 = "static";      // 5号电梯目前的状态

var mission = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 公共任务列表

var target_1 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 1号电梯任务列表
var target_2 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 2号电梯任务列表
var target_3 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 3号电梯任务列表
var target_4 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 4号电梯任务列表
var target_5 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);          // 5号电梯任务列表

var warn_1 = document.getElementById('1_alert');          // 1号电梯报警按钮
var warn_2 = document.getElementById('2_alert');          // 2号电梯报警按钮
var warn_3 = document.getElementById('3_alert');          // 3号电梯报警按钮
var warn_4 = document.getElementById('4_alert');          // 4号电梯报警按钮
var warn_5 = document.getElementById('5_alert');          // 5号电梯报警按钮

var up_button = new Array(document.getElementById('up_1'),         // 上升按钮列表
    document.getElementById('up_2'),
    document.getElementById('up_3'),
    document.getElementById('up_4'),
    document.getElementById('up_5'),
    document.getElementById('up_6'),
    document.getElementById('up_7'),
    document.getElementById('up_8'),
    document.getElementById('up_9'),
    document.getElementById('up_10'),
    document.getElementById('up_11'),
    document.getElementById('up_12'),
    document.getElementById('up_13'),
    document.getElementById('up_14'),
    document.getElementById('up_15'),
    document.getElementById('up_16'),
    document.getElementById('up_17'),
    document.getElementById('up_18'),
    document.getElementById('up_19'));

var down_button = new Array(document.getElementById('down_2'),         // 下降按钮列表
    document.getElementById('down_3'),
    document.getElementById('down_4'),
    document.getElementById('down_5'),
    document.getElementById('down_6'),
    document.getElementById('down_7'),
    document.getElementById('down_8'),
    document.getElementById('down_9'),
    document.getElementById('down_10'),
    document.getElementById('down_11'),
    document.getElementById('down_12'),
    document.getElementById('down_13'),
    document.getElementById('down_14'),
    document.getElementById('down_15'),
    document.getElementById('down_16'),
    document.getElementById('down_17'),
    document.getElementById('down_18'),
    document.getElementById('down_19'),
    document.getElementById('down_20'));

var E1_button = new Array(document.getElementById('1_alert'),         // 1号电梯数字按钮列表
    document.getElementById('1_f1'),
    document.getElementById('1_f2'),
    document.getElementById('1_f3'),
    document.getElementById('1_f4'),
    document.getElementById('1_f5'),
    document.getElementById('1_f6'),
    document.getElementById('1_f7'),
    document.getElementById('1_f8'),
    document.getElementById('1_f9'),
    document.getElementById('1_f10'),
    document.getElementById('1_f11'),
    document.getElementById('1_f12'),
    document.getElementById('1_f13'),
    document.getElementById('1_f14'),
    document.getElementById('1_f15'),
    document.getElementById('1_f16'),
    document.getElementById('1_f17'),
    document.getElementById('1_f18'),
    document.getElementById('1_f19'),
    document.getElementById('1_f20'));

var E2_button = new Array(document.getElementById('2_alert'),         // 2号电梯数字按钮列表
    document.getElementById('2_f1'),
    document.getElementById('2_f2'),
    document.getElementById('2_f3'),
    document.getElementById('2_f4'),
    document.getElementById('2_f5'),
    document.getElementById('2_f6'),
    document.getElementById('2_f7'),
    document.getElementById('2_f8'),
    document.getElementById('2_f9'),
    document.getElementById('2_f10'),
    document.getElementById('2_f11'),
    document.getElementById('2_f12'),
    document.getElementById('2_f13'),
    document.getElementById('2_f14'),
    document.getElementById('2_f15'),
    document.getElementById('2_f16'),
    document.getElementById('2_f17'),
    document.getElementById('2_f18'),
    document.getElementById('2_f19'),
    document.getElementById('2_f20'));

var E3_button = new Array(document.getElementById('3_alert'),         // 3号电梯数字按钮列表
    document.getElementById('3_f1'),
    document.getElementById('3_f2'),
    document.getElementById('3_f3'),
    document.getElementById('3_f4'),
    document.getElementById('3_f5'),
    document.getElementById('3_f6'),
    document.getElementById('3_f7'),
    document.getElementById('3_f8'),
    document.getElementById('3_f9'),
    document.getElementById('3_f10'),
    document.getElementById('3_f11'),
    document.getElementById('3_f12'),
    document.getElementById('3_f13'),
    document.getElementById('3_f14'),
    document.getElementById('3_f15'),
    document.getElementById('3_f16'),
    document.getElementById('3_f17'),
    document.getElementById('3_f18'),
    document.getElementById('3_f19'),
    document.getElementById('3_f20'));

var E4_button = new Array(document.getElementById('4_alert'),         // 4号电梯数字按钮列表
    document.getElementById('4_f1'),
    document.getElementById('4_f2'),
    document.getElementById('4_f3'),
    document.getElementById('4_f4'),
    document.getElementById('4_f5'),
    document.getElementById('4_f6'),
    document.getElementById('4_f7'),
    document.getElementById('4_f8'),
    document.getElementById('4_f9'),
    document.getElementById('4_f10'),
    document.getElementById('4_f11'),
    document.getElementById('4_f12'),
    document.getElementById('4_f13'),
    document.getElementById('4_f14'),
    document.getElementById('4_f15'),
    document.getElementById('4_f16'),
    document.getElementById('4_f17'),
    document.getElementById('4_f18'),
    document.getElementById('4_f19'),
    document.getElementById('4_f20'));

var E5_button = new Array(document.getElementById('5_alert'),         // 5号电梯数字按钮列表
    document.getElementById('5_f1'),
    document.getElementById('5_f2'),
    document.getElementById('5_f3'),
    document.getElementById('5_f4'),
    document.getElementById('5_f5'),
    document.getElementById('5_f6'),
    document.getElementById('5_f7'),
    document.getElementById('5_f8'),
    document.getElementById('5_f9'),
    document.getElementById('5_f10'),
    document.getElementById('5_f11'),
    document.getElementById('5_f12'),
    document.getElementById('5_f13'),
    document.getElementById('5_f14'),
    document.getElementById('5_f15'),
    document.getElementById('5_f16'),
    document.getElementById('5_f17'),
    document.getElementById('5_f18'),
    document.getElementById('5_f19'),
    document.getElementById('5_f20'));

var elevator_1 = document.getElementById('elevator_1');                      // 1号电梯
var elevator_2 = document.getElementById('elevator_2');                      // 2号电梯
var elevator_3 = document.getElementById('elevator_3');                      // 3号电梯
var elevator_4 = document.getElementById('elevator_4');                      // 4号电梯
var elevator_5 = document.getElementById('elevator_5');                      // 5号电梯

function add_mission(target, type)                                           // 无电梯空闲时,添加公共任务
{
    if((status_1 === "up" && type === "up" && target > n1) ||                // 1号电梯满足顺路条件,添加到其私有任务列表
        (status_1 === "down" && type === "down" && target < n1))
        add_target_1(target);
    else if((status_2 === "up" && type === "up" && target > n2) ||           // 2号电梯满足顺路条件,添加到其私有任务列表
        (status_2 === "down" && type === "down" && target < n2))
        add_target_2(target);
    else if((status_3 === "up" && type === "up" && target > n3) ||           // 3号电梯满足顺路条件,添加到其私有任务列表
        (status_3 === "down" && type === "down" && target < n3))
        add_target_3(target);
    else if((status_4 === "up" && type === "up" && target > n4) ||           // 4号电梯满足顺路条件,添加到其私有任务列表
        (status_4 === "down" && type === "down" && target < n4))
        add_target_4(target);
    else if((status_5 === "up" && type === "up" && target > n5) ||           // 5号电梯满足顺路条件,添加到其私有任务列表
        (status_5 === "down" && type === "down" && target < n5))
        add_target_5(target);
    else
        mission[current++] = target;                                         // 没有电梯满足顺路条件,添加至公共任务列表
}

function is_mission_empty()                      // 公共任务列表是否为空
{
    if(mission[0]===0)
        return true;
    else
        return false;
}

function get_mission()                           // 从等待列表中取公共任务执行
{
    var get = mission[0];
    for(var i=0; i<19; i++)
        mission[i]=mission[i+1];
    mission[19]=0;
    current--;
    return get;
}

function sort_s_to_l(arr)                        // 冒泡排序,对数组从小到大排序
{
    var i = arr.length, j;
    var temp;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
    return arr;
}

function sort_l_to_s(arr)                        // 冒泡排序,对数组从大到小排序
{
    var i = arr.length, j;
    var temp;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
    return arr;
}

function sort(status, target_array, n)                 // 对任务列表排序,调整等待列表中的任务优先级
{
    var x = 0;
    var y = 0;
    var first = new Array();
    var second = new Array();
    var a1 = new Array();
    var a2 = new Array();
    if(status === "up")                              // 电梯处于上升状态时,大于目前楼层的任务放在数组1,小于目前楼层的任务放在数组2
    {
        for(var i=0; target_array[i] !== 0; i++)
        {
            if (target_array[i] > n)
                first[x++] = target_array[i];
            else
                second[y++] = target_array[i];
        }
        a1 = sort_s_to_l(first);                      // 对数组1从小到大排序,数组2从大到小排序
        a2 = sort_l_to_s(second);
    }
    else                                     // 电梯处于下降状态时,小于目前楼层的任务放在数组1,大于目前楼层的任务放在数组2
    {
        for(var i=0; target_array[i] !== 0; i++)
        {
            if (target_array[i] < n)
                first[x++] = target_array[i];
            else
                second[y++] = target_array[i];
        }
        a1 = sort_l_to_s(first);                      // 对数组1从大到小排序,数组2从小到大排序
        a2 = sort_s_to_l(second);
    }
    for(var i=0; i < x; i++)                         // 将数组2插在数组1后方,融合形成新的任务列表
        target_array[i] = a1[i];
    for(var i=x; i < x+y; i++)
        target_array[i] = a2[i-x];
    return target_array;
}

function add_target_1(target)                      // 给1号电梯任务列表添加新任务
{
    if((target > n1 && target < fl1 && status_1 === "up") ||        // 若新任务优先级超过当前任务,将新任务与当前任务替换
        (target < n1 && target > fl1 && status_1 === "down"))
    {
        var temp = fl1;
        fl1 = target;
        target_1[current1++] = temp;
    }
    else
    {
        target_1[current1++] = target;                 // 添加新任务至任务列表
    }
    target_1 = sort(status_1, target_1, n1);            // 对任务列表重新排序
}

function add_target_2(target)                      // 给2号电梯任务列表添加新任务
{
    if ((target > n2 && target < fl2 && status_2 === "up") ||        // 若新任务优先级超过当前任务,将新任务与当前任务替换
        (target < n2 && target > fl2 && status_2 === "down"))
    {
        var temp = fl2;
        fl2 = target;
        target_2[current2++] = temp;
    }
    else
    {
        target_2[current2++] = target;                 // 添加新任务至任务列表
    }
    target_2 = sort(status_2, target_2, n2);            // 对任务列表重新排序
}

function add_target_3(target)                      // 给3号电梯任务列表添加新任务
{
    if((target > n3 && target < fl3 && status_3 === "up") ||        // 若新任务优先级超过当前任务,将新任务与当前任务替换
        (target < n3 && target > fl3 && status_3 === "down"))
    {
        var temp = fl3;
        fl3 = target;
        target_3[current3++] = temp;
    }
    else
    {
        target_3[current3++] = target;                 // 添加新任务至任务列表
    }
    target_3 = sort(status_3, target_3, n3);            // 对任务列表重新排序
}

function add_target_4(target)                      // 给4号电梯任务列表添加新任务
{
    if((target > n4 && target < fl4 && status_4 === "up") ||        // 若新任务优先级超过当前任务,将新任务与当前任务替换
        (target < n4 && target > fl4 && status_4 === "down"))
    {
        var temp = fl4;
        fl4 = target;
        target_4[current4++] = temp;
    }
    else
    {
        target_4[current4++] = target;                 // 添加新任务至任务列表
    }
    target_4 = sort(status_4, target_4, n4);            // 对任务列表重新排序
}

function add_target_5(target)                      // 给5号电梯任务列表添加新任务
{
    if((target > n5 && target < fl5 && status_5 === "up") ||        // 若新任务优先级超过当前任务,将新任务与当前任务替换
        (target < n5 && target > fl5 && status_5 === "down"))
    {
        var temp = fl5;
        fl5 = target;
        target_5[current5++] = temp;
    }
    else
    {
        target_5[current5++] = target;                 // 添加新任务至任务列表
    }
    target_5 = sort(status_5, target_5, n5);            // 对任务列表重新排序
}

function is_1_idle()                     // 判断1号电梯是否有私有任务
{
    if(target_1[0]===0)
        return true;
    else
        return false;
}

function is_2_idle()                     // 判断2号电梯是否有私有任务
{
    if(target_2[0]===0)
        return true;
    else
        return false;
}

function is_3_idle()                     // 判断3号电梯是否有私有任务
{
    if(target_3[0]===0)
        return true;
    else
        return false;
}

function is_4_idle()                     // 判断4号电梯是否有私有任务
{
    if(target_4[0]===0)
        return true;
    else
        return false;
}

function is_5_idle()                     // 判断5号电梯是否有私有任务
{
    if(target_5[0]===0)
        return true;
    else
        return false;
}

function get_target_1()                           // 从1号电梯等待列表中取任务执行
{
    var get = target_1[0];
    for(var i=0; i<19; i++)
        target_1[i]=target_1[i+1];
    target_1[19]=0;
    current1--;
    return get;
}

function get_target_2()                           // 从2号电梯等待列表中取任务执行
{
    var get = target_2[0];
    for(var i=0; i<19; i++)
        target_2[i]=target_2[i+1];
    target_2[19]=0;
    current2--;
    return get;
}

function get_target_3()                           // 从3号电梯等待列表中取任务执行
{
    var get = target_3[0];
    for(var i=0; i<19; i++)
        target_3[i]=target_3[i+1];
    target_3[19]=0;
    current3--;
    return get;
}

function get_target_4()                           // 从4号电梯等待列表中取任务执行
{
    var get = target_4[0];
    for(var i=0; i<19; i++)
        target_4[i]=target_4[i+1];
    target_4[19]=0;
    current4--;
    return get;
}

function get_target_5()                           // 从5号电梯等待列表中取任务执行
{
    var get = target_5[0];
    for(var i=0; i<19; i++)
        target_5[i]=target_5[i+1];
    target_5[19]=0;
    current5--;
    return get;
}

function find()                                  // 寻找闲置的电梯
{
    if(status_1 === "static"){c=1; return;}
    if(status_2 === "static"){c=2; return;}
    if(status_3 === "static"){c=3; return;}
    if(status_4 === "static"){c=4; return;}
    if(status_5 === "static"){c=5; return;}
}

function work(floor, order)                      // 外部按钮触发事件
{
    find();                // 寻找空闲电梯
    var target = floor;
    var type = order;
    switch(c)
    {
        case 0:
            add_mission(target, type);       // 无电梯空闲,加入公共任务列表或各电梯任务列表
            break;
        case 1:
            fl1=floor;              // 1号电梯空闲,执行任务
            c=0;
            move1();
            break;
        case 2:
            fl2=floor;              // 2号电梯空闲,执行任务
            c=0;
            move2();
            break;
        case 3:
            fl3=floor;              // 3号电梯空闲,执行任务
            c=0;
            move3();
            break;
        case 4:
            fl4=floor;              // 4号电梯空闲,执行任务
            c=0;
            move4();
            break;
        case 5:
            fl5=floor;              // 5号电梯空闲,执行任务
            c=0;
            move5();
            break;
    }
}

function move1()                    // 1号电梯的移动函数,调用setTimeout循环执行
{
    elevator_1.style.background="#ACD6FF";          // 变为浅蓝色,表示移动
    if(n1 < fl1)                               // 上升
    {
        status_1="up";
        elevator_1.style.top=elevator_1.offsetTop-50+"px";
        n1++;
        setTimeout("move1()", 500);
    }
    else if(n1 > fl1)                          // 下降
    {
        status_1="down";
        elevator_1.style.top=elevator_1.offsetTop+50+"px";
        n1--;
        setTimeout("move1()", 500);
    }
    else
    {
        elevator_1.style.background = "#0000C6";           // 变为深蓝色,表示停顿并上下客
        if(n1!==20){up_button[n1-1].style.border="";}
        if(n1!==1){down_button[n1-2].style.border="";}        // 该层按钮变为初始状态
        E1_button[n1].style.background="#FBFBFF";
        E1_button[n1].style.border="2px solid blue";
        if(is_1_idle())
        {
            if(is_mission_empty())
            {
                status_1="static";
                elevator_1.style.background = "#00EC00";           // 公共任务和私有任务都为空,进入闲置状态
            }
            else
            {
                fl1=get_mission();                  // 私有任务为空,处理公共任务
                setTimeout("move1()", 1000);
            }
        }
        else
        {
            fl1=get_target_1();                    // 处理下一个私有任务
            setTimeout("move1()", 1000);
        }
    }
}

function move2()                    // 2号电梯的移动函数,调用setTimeout循环执行,代码结构与move1()函数相同,故不做进一步注释
{
    elevator_2.style.background="#ACD6FF";
    if(n2 < fl2)
    {
        status_2="up";
        elevator_2.style.top=elevator_2.offsetTop-50+"px";
        n2++;
        setTimeout("move2()", 500);
    }
    else if(n2 > fl2)
    {
        status_2="down";
        elevator_2.style.top=elevator_2.offsetTop+50+"px";
        n2--;
        setTimeout("move2()", 500);
    }
    else
    {
        elevator_2.style.background = "#0000C6";
        if(n2!==20){up_button[n2-1].style.border="";}
        if(n2!==1){down_button[n2-2].style.border="";}
        E2_button[n2].style.background="#FBFBFF";
        E2_button[n2].style.border="2px solid blue";
        if(is_2_idle())
        {
            if(is_mission_empty())
            {
                status_2="static";
                elevator_2.style.background = "#00EC00";
            }
            else
            {
                fl2=get_mission();
                setTimeout("move2()", 1000);
            }
        }
        else
        {
            fl2=get_target_2();
            setTimeout("move2()", 1000);
        }
    }
}

function move3()                    // 3号电梯的移动函数,调用setTimeout循环执行,代码结构与move1()函数相同,故不做进一步注释
{
    elevator_3.style.background="#ACD6FF";
    if(n3 < fl3)
    {
        status_3="up";
        elevator_3.style.top=elevator_3.offsetTop-50+"px";
        n3++;
        setTimeout("move3()", 500);
    }
    else if(n3 > fl3)
    {
        status_3="down";
        elevator_3.style.top=elevator_3.offsetTop+50+"px";
        n3--;
        setTimeout("move3()", 500);
    }
    else
    {
        elevator_3.style.background = "#0000C6";
        if(n3!==20){up_button[n3-1].style.border="";}
        if(n3!==1){down_button[n3-2].style.border="";}
        E3_button[n3].style.background="#FBFBFF";
        E3_button[n3].style.border="2px solid blue";
        if(is_3_idle())
        {
            if(is_mission_empty())
            {
                status_3="static";
                elevator_3.style.background="#00EC00";
            }
            else
            {
                fl3=get_mission();
                setTimeout("move3()", 1000);
            }
        }
        else
        {
            fl3=get_target_3();
            setTimeout("move3()", 1000);
        }
    }
}

function move4()                    // 4号电梯的移动函数,调用setTimeout循环执行,代码结构与move1()函数相同,故不做进一步注释
{
    elevator_4.style.background="#ACD6FF";
    if(n4 < fl4)
    {
        status_4="up";
        elevator_4.style.top=elevator_4.offsetTop-50+"px";
        n4++;
        setTimeout("move4()", 500);
    }
    else if(n4 > fl4)
    {
        status_4="down";
        elevator_4.style.top=elevator_4.offsetTop+50+"px";
        n4--;
        setTimeout("move4()", 500);
    }
    else
    {
        elevator_4.style.background = "#0000C6";
        if(n4!==20){up_button[n4-1].style.border="";}
        if(n4!==1){down_button[n4-2].style.border="";}
        E4_button[n4].style.background="#FBFBFF";
        E4_button[n4].style.border="2px solid blue";
        if(is_4_idle())
        {
            if(is_mission_empty())
            {
                status_4="static";
                elevator_4.style.background="#00EC00";
            }
            else
            {
                fl4=get_mission();
                setTimeout("move4()", 1000);
            }
        }
        else
        {
            fl4=get_target_4();
            setTimeout("move4()", 1000);
        }
    }
}

function move5()                    // 5号电梯的移动函数,调用setTimeout循环执行,代码结构与move1()函数相同,故不做进一步注释
{
    elevator_5.style.background="#ACD6FF";
    if(n5 < fl5)
    {
        status_5="up";
        elevator_5.style.top=elevator_5.offsetTop-50+"px";
        n5++;
        setTimeout("move5()", 500);
    }
    else if(n5 > fl5)
    {
        status_5="down";
        elevator_5.style.top=elevator_5.offsetTop+50+"px";
        n5--;
        setTimeout("move5()", 500);
    }
    else
    {
        elevator_5.style.background = "#0000C6";
        if(n5!==20){up_button[n5-1].style.border="";}
        if(n5!==1){down_button[n5-2].style.border="";}
        E5_button[n5].style.background="#FBFBFF";
        E5_button[n5].style.border="2px solid blue";
        if(is_5_idle())
        {
            if(is_mission_empty())
            {
                status_5="static";
                elevator_5.style.background="#00EC00";
            }
            else
            {
                fl5=get_mission();
                setTimeout("move5()", 1000);
            }
        }
        else
        {
            fl5=get_target_5();
            setTimeout("move5()", 1000);
        }
    }
}

function transport1(t1)                // 1号电梯内部数字按键的触发事件
{
    if(status_1 === "fault")           // 故障状态下不执行任务
        return;
    if(status_1 === "static")          // 闲置状态,直接执行
    {
        fl1=t1;
        move1();
    }
    else
        add_target_1(t1);              // 非闲置状态,添加至任务列表
}

function transport2(t2)                // 2号电梯内部数字按键的触发事件
{
    if(status_2 === "fault")           // 故障状态下不执行任务
        return;
    if(status_2 === "static")          // 闲置状态,直接执行
    {
        fl2=t2;
        move2();
    }
    else
        add_target_2(t2);              // 非闲置状态,添加至任务列表
}

function transport3(t3)                // 3号电梯内部数字按键的触发事件
{
    if(status_3 === "fault")           // 故障状态下不执行任务
        return;
    if(status_3 === "static")          // 闲置状态,直接执行
    {
        fl3=t3;
        move3();
    }
    else
        add_target_3(t3);              // 非闲置状态,添加至任务列表
}

function transport4(t4)                // 4号电梯内部数字按键的触发事件
{
    if(status_4 === "fault")           // 故障状态下不执行任务
        return;
    if(status_4 === "static")          // 闲置状态,直接执行
    {
        fl4=t4;
        move4();
    }
    else
        add_target_4(t4);              // 非闲置状态,添加至任务列表
}

function transport5(t5)                // 5号电梯内部数字按键的触发事件
{
    if(status_4 === "fault")           // 故障状态下不执行任务
        return;
    if(status_5 === "static")          // 闲置状态,直接执行
    {
        fl5=t5;
        move5();
    }
    else
        add_target_5(t5);              // 非闲置状态,添加至任务列表
}

function alert1()                // 1号电梯内部报警按键的触发事件
{
    current1 = 0;                // 停止运行当前任务,并清除私有任务列表中的所有任务
    fl1 = n1;
    for(var i=1; i<=20; i++)
    {
        E1_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E1_button[i].style.border="2px solid blue";
    }
    for(var j=0; j<=19; j++)
        target_1[j]=0;
    setTimeout("status_1 = 'fault';", 1001);        // 设置为故障状态
    setTimeout("elevator_1.style.background='#FF0000';", 1001);         // 变为红色
}

function alert2()                // 2号电梯内部报警按键的触发事件
{
    current2 = 0;                // 停止运行当前任务,并清除私有任务列表中的所有任务
    fl2 = n2;
    for(var i=1; i<=20; i++)
    {
        E2_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E2_button[i].style.border="2px solid blue";
    }
    for(var j=0; j<=19; j++)
        target_2[j]=0;
    setTimeout("status_2 = 'fault';", 1001);        // 设置为故障状态
    setTimeout("elevator_2.style.background='#FF0000';", 1001);         // 变为红色
}

function alert3()                // 3号电梯内部报警按键的触发事件
{
    current3 = 0;                // 停止运行当前任务,并清除私有任务列表中的所有任务
    fl3 = n3;
    for(var i=1; i<=20; i++)
    {
        E3_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E3_button[i].style.border="2px solid blue";
    }
    for(var j=0; j<=19; j++)
        target_3[j]=0;
    setTimeout("status_3 = 'fault';", 1001);        // 设置为故障状态
    setTimeout("elevator_3.style.background='#FF0000';", 1001);         // 变为红色
}

function alert4()                // 4号电梯内部报警按键的触发事件
{
    current4 = 0;                // 停止运行当前任务,并清除私有任务列表中的所有任务
    fl4 = n4;
    for(var i=1; i<=20; i++)
    {
        E4_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E4_button[i].style.border="2px solid blue";
    }
    for(var j=0; j<=19; j++)
        target_4[j]=0;
    setTimeout("status_4 = 'fault';", 1001);        // 设置为故障状态
    setTimeout("elevator_4.style.background='#FF0000';", 1001);         // 变为红色
}

function alert5()                // 5号电梯内部报警按键的触发事件
{
    current5 = 0;                // 停止运行当前任务,并清除私有任务列表中的所有任务
    fl5 = n5;
    for(var i=1; i<=20; i++)
    {
        E5_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E5_button[i].style.border="2px solid blue";
    }
    for(var j=0; j<=19; j++)
        target_5[j]=0;
    setTimeout("status_5 = 'fault';", 1001);        // 设置为故障状态
    setTimeout("elevator_5.style.background='#FF0000';", 1001);         // 变为红色
}

function refresh_1()            // 1号电梯恢复按钮触发事件
{
    status_1 = "static";        // 设置为闲置状态
    for(var i=1; i<=20; i++)
    {
        E1_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E1_button[i].style.border="2px solid blue";
    }
    elevator_1.style.background="#00EC00";               // 变为绿色
    warn_1.style.background="#FBFBFF";
    warn_1.style.border="2px solid blue";
}

function refresh_2()            // 2号电梯恢复按钮触发事件
{
    status_2 = "static";        // 设置为闲置状态
    for(var i=1; i<=20; i++)
    {
        E2_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E2_button[i].style.border="2px solid blue";
    }
    elevator_2.style.background="#00EC00";               // 变为绿色
    warn_2.style.background="#FBFBFF";
    warn_2.style.border="2px solid blue";
}

function refresh_3()            // 3号电梯恢复按钮触发事件
{
    status_3 = "static";        // 设置为闲置状态
    for(var i=1; i<=20; i++)
    {
        E3_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E3_button[i].style.border="2px solid blue";
    }
    elevator_3.style.background="#00EC00";               // 变为绿色
    warn_3.style.background="#FBFBFF";
    warn_3.style.border="2px solid blue";
}

function refresh_4()            // 4号电梯恢复按钮触发事件
{
    status_4 = "static";        // 设置为闲置状态
    for(var i=1; i<=20; i++)
    {
        E4_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E4_button[i].style.border="2px solid blue";
    }
    elevator_4.style.background="#00EC00";               // 变为绿色
    warn_4.style.background="#FBFBFF";
    warn_4.style.border="2px solid blue";
}

function refresh_5()            // 5号电梯恢复按钮触发事件
{
    status_5 = "static";        // 设置为闲置状态
    for(var i=1; i<=20; i++)
    {
        E5_button[i].style.background="#FBFBFF";            // 内部按键全部回到初始状态
        E5_button[i].style.border="2px solid blue";
    }
    elevator_5.style.background="#00EC00";               // 变为绿色
    warn_5.style.background="#FBFBFF";
    warn_5.style.border="2px solid blue";
}