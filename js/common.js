/**
 * Created by dell on 2018/1/7.
 */
/*
 ���ܣ�����
 ������
 node �˶�˭��  �ڵ����  ����
 targetValue   Ŀ��ֵ   ����
 callback  һ�������˶���֮��Ҫִ�еĴ���  ���� ��ѡ
 */
function animate(node,targetValue,callback){
  //var flag
  //ʱ�䣺��ʱ��
  //״̬������div��״̬������leftֵ��
  //�����ť�����һ���µĶ�ʱ�����µĶ�ʱ������֮ǰ����֮ǰ�Ķ�ʱ��ֹͣ�ˡ�
  if(node.flag!=undefined){ //��ÿһ���˶�������� һ��flag���Ա�ʾ����˶�����Ķ�ʱ����ʶ
    clearInterval(node.flag); //��֮ǰ�Ķ�ʱ��ֹͣ�ˡ�
  }
  //��ÿһ���˶��������һ����ʱ����ʶ
  node.flag = setInterval(function(){

    //ԭ�е�leftֵ
    var currentValue = node.offsetLeft;
    //����
    var step = (targetValue-currentValue)/20;
    if(step>0){
      step = Math.ceil(step);
    }else if(step<0){
      step = Math.floor(step);
    }

    //�ж��Ƿ񵽴�Ŀ��
    if(currentValue==targetValue){ //����Ŀ��
      clearInterval(node.flag);//������ʱ��,��һʱ���ʱ������ִ��]
      if(callback!=undefined){
        callback();
      }
      return;//����������ִ��
    }
    node.style.left = currentValue + step + 'px';

  },10);
}