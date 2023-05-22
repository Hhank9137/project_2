<?php include 'header.php'; ?>
<?php
if (isset($_GET['mid']))
{
    $dmid=$_GET['mid']; 
    require 'db_open.php';
    $sql = "select * FROM member where mid='".$dmid."'"; // 指定SQL查詢字串
    if ($result = mysqli_query($link, $sql)) {
        $row = mysqli_fetch_assoc($result);
        $dmid=$row['mid'];
        $dmname=$row['mname'];
        $dpasswd=$row['passwd'];   
        $mode="update";
        }
}
else
{
    if (isset($_POST['dmid'])) 
    {
        $dmid=$_POST['dmid'];
        $dmname=$_POST['dmname'];
        $dpasswd=$_POST['dpasswd'];
        $mode=$_POST['mode'];
        if ($mode=="update"){
            require 'db_open.php';
            $sql = "update member set mname='$dmname',passwd='$dpasswd' where mid='$dmid'"; // 指定SQL查詢字串
            if ($result = mysqli_query($link, $sql)) {
                $mode = "browse";
                echo "<script>redirectDialog('member.php','$mode', '資料修改成功!');</script>";
            }        
        }
        else
        {
        if ($dmid=="")
        {
        echo "<script>alert('請輸入會員編號');</script>";}
        else
        {
            require 'db_open.php';
            $sql = "select * FROM member where mid='".$dmid."'"; // 指定SQL查詢字串
            if (mysqli_num_rows(mysqli_query($link, $sql))!=0) {
                echo "<script>alert('會員編號已存在');</script>"; 
            }
            else
            {
                $sql = "insert into member(mid,mname,passwd) value('$dmid','$dmname','$dpasswd')";// 新增資料
                if ($result = mysqli_query($link, $sql)){
                    $mode = "browse";
                echo "<script>redirectDialog('member.php','$mode', '新增資料成功!');</script>";
                }
                else
                echo "<script>alert('新增失敗');</script>";
            }    

        }
        }
    }
    else
    {
        $dmid="";
        $dmname="";
        $dpasswd="";
    }
}
?>
                    <div class="col-lg-12">
                        <div class="card alert">
                            <div class="card-header">
                                <?php if ($mode!="update"){
                                      echo "<h2>新增會員</h2><Br/>";}
                                      else
                                      {echo "<h2>會員資料修改</h2><Br/>";}
                                ?>
                                 <div class="row">
                                
                                
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div class="horizontal-form">
                                    <form class="form-horizontal" method="post" action="memberdetail.php">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">會員帳號：</label>
                                            <div class="col-sm-10">
                                                <input name="dmid" type="text" class="form-control" placeholder="會員帳號" value="<?=$dmid?>" <?php if ($mode=="update") echo "readonly=\"readonly\""?>>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">會員名稱：</label>
                                            <div class="col-sm-10">
                                                <input name="dmname" type="text" class="form-control" placeholder="會員名稱" value="<?=$dmname?>">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">密碼：</label>
                                            <div class="col-sm-10">
                                                <input name="dpasswd" type="text" class="form-control" placeholder="密碼" value="<?=$dpasswd?>">
                                                <input name="mode" type="hidden"  value="<?=$mode?>">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button type="submit" class="btn btn-primary btn-flat btn-addon m-b-10 m-l-5"><i class="ti-check"></i>確認</button>
                                                <a href="member.php"> <button type="button" class="btn btn-default btn-flat btn-addon m-b-10 m-l-5"><i class="ti-close"></i>離開</button></a>
                                            </div>
                    
                                        </div>
                                        <div class="form-group">
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                     </div><!-- /# column -->					

						
<?php include 'footer.php'; ?>