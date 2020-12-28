;;;;;;;;;;;;;;;;;;;;;;起始(长按配合其他键映射成方向键，短按还是大写键);;;;;;;;;;;;;;;;;;;;;;;;;;;
CapsLock::
KeyWait, CapsLock     
if (A_ThisHotkey="CapsLock")
        {
        SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"    
        }
Return
;;;;;;;;;;;;;;;;;;;;;;终止;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;;;;;;;;;;;;;;;;;;;;起始(方向键);;;;;;;;;;;;;;;;;;;;;;;;;;;
#if GetKeyState("Capslock", "P")
k:: SendInput,{down}     
j:: SendInput,{left}  
l:: SendInput,{right}    
i:: SendInput,{Up}   

;其中的`是转义符号(如下是分号键和引号键)
u:: SendInput,{home}    ;长按CapsLock键+u键是home键
o:: SendInput,{end}    ;长按CapsLock键+o键是end键   
m:: SendInput,{backspace}    ;长按CapsLock键+m键是backspace键   

left::SendInput,{home} 
right::SendInput,{end} 
Up::SendInput,{PgUp}   
down::SendInput,{PgDn} 

; #if
;;;;;;;;;;;;;;;;;;;;;;终止;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;;;;;;;;;;;;;;;;;;;;起始(删除一整行Alt键+d键);;;;;;;;;;;;;;;;;;;;;;;;;;;
!d::   
Send {Home}
Send +{End}  
Send {delete}       
return
;;;;;;;;;;;;;;;;;;;;;;终止;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;;;;;;;;;;;;;;;;;;;;起始(复制一整行Alt键+c键);;;;;;;;;;;;;;;;;;;;;;;;;;;
!c::   
send {home}
send +{end}
send ^c   ;输出ctrl+c,复制一整行
return
;;;;;;;;;;;;;;;;;;;;;;终止;;;;;;;;;;;;;;;;;;;;;;;;;;;
