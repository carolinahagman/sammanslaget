using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PictureHandler : MonoBehaviour {

	private Image refPicture;
	private Sprite spriteToShow;

	public void FadeInImage(Image refPicture, Sprite spriteToShow) {

		this.refPicture = refPicture;
		this.spriteToShow = spriteToShow;

		refPicture.sprite = spriteToShow;

		//sets the picture to be completely invisible
		refPicture.color = new Color(1, 1, 1, 0);

		StartCoroutine(ShowImage());
	}
	
	IEnumerator ShowImage() {
		//pic becomes clearer over timeForFade amount of time in s (timeForFade cannot be more than 1).
		for (float i = 0; i <= 1; i += Time.deltaTime) {
			refPicture.color = new Color(1, 1, 1, i);
			yield return null;
		}
	}

	//sadly this only fades out on one sec atm.
	public void FadeOutImage(Image refPicture) {

		this.refPicture = refPicture;

		StartCoroutine(FadeImageOut());
	}

	IEnumerator FadeImageOut() {

		for (float i = 1; i > 0; i -= Time.deltaTime) {
			refPicture.color = new Color(1, 1, 1, i);
			Debug.Log("i is now equal to: " + i);

			if(i <= 0) refPicture.gameObject.SetActive(false);
			
			yield return null;
		}
	}
}
